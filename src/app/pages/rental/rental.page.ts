import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  LoadingController,
  ModalController,
  NavController,
} from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ModalOptionsComponent } from 'src/app/components/modal-options/modal-options.component';
import { STATIC } from 'src/app/data';
import { IInventory } from 'src/app/models/inventory.interface';
import { InventoryService } from 'src/app/services/inventory.service';
import { RentalService } from 'src/app/services/rental.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';
import * as moment from 'moment';
import { UserService } from 'src/app/services/user.services';
import { LoaderService } from 'src/app/services/loader.service';
import { IHistorial } from 'src/app/models/historial.interface';
@Component({
  selector: 'app-rental-page',
  templateUrl: './rental.page.html',
  styleUrls: ['./rental.page.scss'],
})
export class RentalPage implements OnInit {
  public rentalForm: FormGroup;
  public validation_messages = {
    bike: [],
  };
  private initDate: string = new Date().toISOString();
  public inventoryList: Array<IInventory> = [];
  private inventorySubscription$: Subscription = null;
  private historialList: Array<IHistorial> = [];
  private historialSubscription$: Subscription = null;
  public bikeSelected: IInventory = null;
  public daySelected: number = 0;
  public totalAmount: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private rentalService: RentalService,
    private storageService: StorageService,
    private inventoryService: InventoryService,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private loaderService: LoaderService,
    private userService: UserService
  ) {
    this.inventorySubscription$ = this.inventoryService.inventory$.subscribe(
      (items) => {
        this.inventoryList = items;
      }
    );

    this.historialSubscription$ = this.rentalService.historial$.subscribe(
      (items) => {
        this.historialList = items;
      }
    );
  }

  async ngOnInit() {
    await this.initializeForm();
    await this.getItemSelected();
  }

  public async getItemSelected() {
    await this.rentalService.getHistorial();
    this.bikeSelected = await this.storageService.get('bike_selected');
    this.validateBikeSelected();
  }

  private validateBikeSelected() {
    this.route.params.subscribe((params: object) => {
      const id = params['id'];
      this.updateRentFormValues(id);
    });
  }

  private initializeForm(): void {
    const {
      ERROR_MESSAGE: { BIKE },
    } = STATIC;

    this.validation_messages = {
      bike: BIKE,
    };

    this.rentalForm = this.formBuilder.group({
      bike: ['', Validators.compose([Validators.required])],
      days: [0, Validators.compose([Validators.required])],
    });

    this.inventoryService.getInventory();
  }

  private updateRentFormValues(id: string): void {
    const getTitle = id !== '0' ? this.bikeSelected.title : '';
    this.rentalForm.get('bike').setValue(getTitle);
  }

  public increaseDays(): void {
    this.calculatePriceByCategory('INCREASE', this.bikeSelected.category);
  }

  public decreaseDays(): void {
    this.calculatePriceByCategory('DECREASE', this.bikeSelected.category);
  }

  private calculatePriceByCategory(operator: string, type: string): void {
    switch (type) {
      case 'El??ctricas':
        this.calculatePriceEBikes(operator);
        break;
      case 'Antiguas':
        this.calculatePriceOldBikes(operator);
        break;
      default:
        this.calculatePriceBasicBikes(operator);
        break;
    }
  }

  private calculatePriceEBikes(operator: string): void {
    if (operator === 'INCREASE') {
      this.daySelected += 1;
      this.totalAmount = this.bikeSelected.price * this.daySelected;
    } else {
      this.daySelected -= 1;
      this.totalAmount -= this.bikeSelected.price;
    }
  }

  private calculatePriceOldBikes(operator: string): void {
    if (operator === 'INCREASE') {
      this.daySelected += 1;

      if (this.daySelected < 5) {
        this.totalAmount = this.bikeSelected.price;
      }

      if (this.daySelected > 5) {
        this.totalAmount += this.bikeSelected.price;
      }

      return;
    }

    if (operator === 'DECREASE') {
      this.daySelected -= 1;

      if (this.daySelected > 5) {
        this.totalAmount -= this.bikeSelected.price;
      }

      if (this.daySelected <= 5) {
        this.totalAmount = this.bikeSelected.price;
      }

      if (this.daySelected === 0) {
        this.totalAmount = 0;
      }

      return;
    }
  }

  private calculatePriceBasicBikes(operator: string): void {
    if (operator === 'INCREASE') {
      this.daySelected += 1;

      if (this.daySelected < 3) {
        this.totalAmount = this.bikeSelected.price;
      }

      if (this.daySelected > 3) {
        this.totalAmount += this.bikeSelected.price;
      }

      return;
    }

    if (operator === 'DECREASE') {
      this.daySelected -= 1;

      if (this.daySelected > 3) {
        this.totalAmount -= this.bikeSelected.price;
      }

      if (this.daySelected <= 3) {
        this.totalAmount = this.bikeSelected.price;
      }

      if (this.daySelected === 0) {
        this.totalAmount = 0;
      }
    }
  }

  public async selectBikeInformation() {
    const modal = await this.modalCtrl.create({
      component: ModalOptionsComponent,
      backdropDismiss: true,
      cssClass: 'select-wide large',
      swipeToClose: true,
      componentProps: {
        title: 'Selecciona una Bicicleta',
        search: true,
        source: this.inventoryList,
        type: 'radios',
      },
    });

    modal.onDidDismiss().then((res: any) => {
      const { id } = res && res.data;
      if (id !== '') {
        const bike = this.inventoryList.filter((item) => item.key === id);
        this.rentalForm.get('bike').setValue(bike[bike.length - 1].title);
        this.bikeSelected = bike[bike.length - 1];
      } else {
        this.toastService.presentErrorToast(
          'Es necesario que seleccione una bicicleta para continuar'
        );
      }
    });

    await modal.present();
  }

  get form() {
    return this.rentalForm.controls;
  }

  private checkAvilability(title: string) {
    const result = this.historialList.find((item: any) => {
      return item.title === title && item.status === 'En Progreso';
    });

    return result ? false : true;
  }

  public async submitRentalForm(form: any) {
    if (this.daySelected === 0) {
      this.toastService.presentErrorToast(
        'Es necesario que seleccione al menos 1 d??a para continuar'
      );
      return;
    }

    const { firstname, lastname } = await this.userService.getUserLogged();
    const {
      category,
      categoryId,
      color,
      description,
      uuid,
      location,
      size,
      thumbnail,
      title,
    } = this.bikeSelected;

    const payload = {
      atCreated: moment(this.initDate).format(),
      category,
      categoryId,
      color,
      description,
      uuid,
      location,
      size,
      thumbnail,
      title,
      status: 'En Progreso',
      total: this.totalAmount,
      days: this.daySelected,
      client: `${firstname} ${lastname}`,
    };

    let isAvailable = this.checkAvilability(title);

    if (!isAvailable) {
      this.toastService.presentErrorToast(
        'Bicicleta no disponible para alquiler en estos momentos'
      );
      return;
    }

    this.loaderService.presentLoading('Verificando su pago...');

    this.rentalService.createNewRental(payload).then(async (isRegistered) => {
      if (isRegistered) {
        const currentUser = await this.userService.getUserLogged();
        const newPoints = this.bikeSelected.category === 'El??ctricas' ? 2 : 1;

        await this.userService.updateUserPoints(currentUser, newPoints);
        await this.loaderService.dismissLoading();
        await this.toastService.presentSuccessToast(
          `Se ha creado su renta exitosamente para el dia ${moment(
            this.initDate
          ).format('LL')}.`
        );
        this.rentalForm.reset();
        this.navCtrl.navigateRoot('/historial');
      }
    });
  }

  ngOnDestroy() {
    this.inventorySubscription$.unsubscribe();
    this.historialSubscription$.unsubscribe();
    this.storageService.remove('bike_selected');
  }
}

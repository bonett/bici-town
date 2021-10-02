import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ModalOptionsComponent } from 'src/app/components/modal-options/modal-options.component';
import { STATIC } from 'src/app/data';
import { IInventory } from 'src/app/models/inventory.interface';
import { InventoryService } from 'src/app/services/inventory.service';
import { RentalService } from 'src/app/services/rental.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';
@Component({
  selector: 'app-rental-page',
  templateUrl: './rental.page.html',
  styleUrls: ['./rental.page.scss'],
})
export class RentalPage implements OnInit {
  public rentalForm: FormGroup;
  public validation_messages = {
    bike: [],
    rentDate: [],
    email: [],
    phone: [],
  };
  public initDate: string = new Date().toISOString();
  public inventoryList: Array<IInventory> = [];
  private inventorySubscription$: Subscription = null;
  private bikeSelected: any;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private rentalService: RentalService,
    private storageService: StorageService,
    private inventoryService: InventoryService,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {
    this.inventorySubscription$ = this.inventoryService.inventory$.subscribe(
      (items) => {
        this.inventoryList = items;
      }
    );
  }

  ngOnInit() {
    this.initializeForm();
    this.getItemSelected();
  }

  private validateBikeSelected() {
    this.route.params.subscribe((params: object) => {
      const id = params['id'];
      this.updateRentFormValues(id);
    });
  }

  async getItemSelected() {
    this.bikeSelected = await this.storageService.get('bike_selected');
    this.validateBikeSelected();
  }

  private initializeForm(): void {
    const {
      REGEX: {
        EMAIL_REGEXP: regexEmail,
        PHONE_REGEXP: regexPhone,
        FULLNAME_REGEXP: regexFullName,
      },
      ERROR_MESSAGE: { BIKE, DATE, EMAIL, PHONE },
    } = STATIC;

    this.validation_messages = {
      bike: BIKE,
      rentDate: DATE,
      email: EMAIL,
      phone: PHONE,
    };

    this.rentalForm = this.formBuilder.group({
      bike: ['', Validators.compose([Validators.required])],
      rentDate: ['', Validators.compose([Validators.required])],
      phone: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(regexPhone),
          Validators.minLength(11),
        ]),
      ],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(50),
          Validators.pattern(regexEmail),
        ]),
      ],
    });

    this.inventoryService.getInventory();
  }

  private updateRentFormValues(id: string): void {
    const getTitle = id !== '0' ? this.bikeSelected.title : '';

    this.rentalForm.get('bike').setValue(getTitle);
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
        const bike = this.inventoryList.filter((item) => item.id === id);
        this.rentalForm.get('bike').setValue(bike[bike.length - 1].title);
        this.bikeSelected = this.findItemById(id);
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

  private findItemById(id) {
    const result = this.inventoryList.filter((item) => item.id === id);
    return result && result[result.length - 1];
  }

  public submitRentalForm(form: any): void {
    const { bike, email, phone, rentDate } = form;
    const {
      category,
      categoryId,
      color,
      description,
      id,
      key,
      location,
      size,
      thumbnail,
      title,
    } = this.bikeSelected;

    const payload = {
      bike,
      email,
      phone,
      rentDate,
      category,
      categoryId,
      color,
      description,
      id,
      key,
      location,
      size,
      thumbnail,
      title,
    };

    this.rentalService.createNewRental(payload).then((isRegistered) => {
      if (isRegistered) {
        this.toastService.presentSuccessToast(
          `Se ha creado su renta exitosamente para el dia ${rentDate}.`
        );
        this.rentalForm.reset();
        this.navCtrl.navigateRoot('/inventory');
      }
    });
  }

  ngOnDestroy() {
    this.inventorySubscription$.unsubscribe();
    this.storageService.remove('bike_selected');
  }
}

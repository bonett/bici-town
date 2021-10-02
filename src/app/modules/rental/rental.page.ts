import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { ModalOptionsComponent } from 'src/app/components/modal-options/modal-options.component';
import { STATIC } from 'src/app/data';
import { IInventory } from 'src/app/models/inventory.interface';
import { InventoryService } from 'src/app/services/inventory.service';
import { StorageService } from 'src/app/services/storage.service';
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
    fullname: [],
    email: [],
    phone: [],
  };
  public initDate: string = new Date().toISOString();
  public inventoryList: Array<IInventory> = [];
  private inventorySubscription$: Subscription = null;
  private bikeSelected: object = null;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storageService: StorageService,
    private inventoryService: InventoryService,
    private modalCtrl: ModalController
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

  async getItemSelected() {
    this.bikeSelected = await this.storageService.get('bike_details');
  }

  private initializeForm(): void {
    const {
      REGEX: {
        EMAIL_REGEXP: regexEmail,
        PHONE_REGEXP: regexPhone,
        FULLNAME_REGEXP: regexFullName,
      },
      ERROR_MESSAGE: { BIKE, DATE, EMAIL, PHONE, FULLNAME },
    } = STATIC;

    this.validation_messages = {
      bike: BIKE,
      rentDate: DATE,
      fullname: FULLNAME,
      email: EMAIL,
      phone: PHONE,
    };

    this.rentalForm = this.formBuilder.group({
      bike: ['', Validators.compose([Validators.required])],
      rentDate: ['', Validators.compose([Validators.required])],
      fullname: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(regexFullName),
          Validators.minLength(10),
          Validators.maxLength(50),
        ]),
      ],
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
      const {
        data: { id },
      } = res;
      if (id !== '') {
        const bike = this.inventoryList.filter((item) => item.id === id);
        this.rentalForm.get('bike').setValue(bike[bike.length - 1].title);
        this.bikeSelected = res.data;
      }
    });
    await modal.present();
  }

  get form() {
    return this.rentalForm.controls;
  }

  public saveForm(payload: any): void {
    /*   const payload = data,
          buttons = [
        {
          cssClass: 'secondaryClass',
          text: 'Reenviar email link',
          handler: () => {
            this._authService.sendEmailLink();
            setTimeout(() => {
              this._alertService.createAlertPayload('Mensaje Enviado!', 'iconSuccess', 'Por favor revisa tu bandeja de entrada para activar tu cuenta', '');
            }, 1500);
          }
        },
        {
          cssClass: 'primaryClass',
          text: 'Aceptar',
          handler: () => { }
        }
      ];

    this._authService.signIn(payload).then(
      (result) => {
        const user = result && result.user;
        if (user && user.emailVerified) {
          this._navCtrl.navigateRoot(this.nextScreen);
        } else {
          this._alertService.createAlertPayload('Ops!', 'iconError', 'Debes verificar tu cuenta para iniciar sesión', buttons);
        }
      }).catch((error) => {
        this._alertService.createAlertPayload('Ops!', 'iconError', 'No es posible iniciar sesión, verifica tus credenciales', '');
      });; */
  }

  ngOnDestroy() {
    this.inventorySubscription$.unsubscribe();
    this.storageService.remove('bike_selected');
  }
}

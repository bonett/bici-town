import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { STATIC } from 'src/app/data';
@Component({
  selector: 'app-rental-page',
  templateUrl: './rental.page.html',
  styleUrls: ['./rental.page.scss'],
})
export class RentalPage implements OnInit {
  public rentalForm: FormGroup;
  public validation_messages = {
    fullname: [],
    email: [],
    phone: [],
  };

  @Output() submitForm = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm(): void {
    const {
      REGEX: {
        EMAIL_REGEXP: regexEmail,
        PHONE_REGEXP: regexPhone,
        FULLNAME_REGEXP: regexFullName,
      },
      ERROR_MESSAGE: { NAME, EMAIL, PHONE },
    } = STATIC;

    this.validation_messages = {
      fullname: NAME,
      email: EMAIL,
      phone: PHONE,
    };

    this.rentalForm = this.formBuilder.group({
      fullname: [
        'wilfrido bonett',
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(30),
          Validators.pattern(regexFullName),
        ]),
      ],
      phone: [
        '+2332323232',
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(30),
          Validators.pattern(regexPhone),
        ]),
      ],
      email: [
        'wbonett10@gmail.com',
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(50),
          Validators.pattern(regexEmail),
        ]),
      ],
    });
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
}

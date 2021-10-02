import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toast: ToastController) {}

  public async presentErrorToast(message: string, duration?: number) {
    if (!duration) {
      duration = 3000;
    }
    const toast = await this.toast.create({
      message: `<ion-icon name="alert-circle-outline"></ion-icon>  ${message}</div>`,
      duration,
      animated: true,
      color: 'danger',
      mode: 'ios',
      cssClass: 'text-white',
      position: 'bottom',
    });
    await toast.present();
  }

  public async presentSuccessToast(message: string, duration?: number) {
    if (!duration) {
      duration = 3000;
    }
    const toast = await this.toast.create({
      message: `<ion-icon name="checkmark-circle-outline"></ion-icon>  ${message}</div>`,
      duration,
      mode: 'ios',
      animated: true,
      cssClass: 'text-white',
      color: 'success',
      position: 'bottom',
    });
    await toast.present();
  }
}

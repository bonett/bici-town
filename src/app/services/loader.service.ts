import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  constructor(private loadingController: LoadingController) {}

  public async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Verificado su pago...',
    });
    await loading.present();
  }

  public async dismissLoading() {
    await this.loadingController.dismiss();
  }
}

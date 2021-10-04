import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IInventory } from 'src/app/models/inventory.interface';
import { LoaderService } from 'src/app/services/loader.service';
import { RentalService } from 'src/app/services/rental.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public item: object = {};

  constructor(
    private navCtrl: NavController,
    private storageService: StorageService,
    private rentalService: RentalService,
    private loaderService: LoaderService
  ) {}

  ngOnInit() {
    this.getItemSelected();
  }

  public async getItemSelected() {
    this.item = await this.storageService.get('bike_details');
  }

  public newRental(uuid: string): void {
    this.storageService.set('bike_selected', this.item);
    this.navCtrl.navigateForward(`/rental/new/${uuid}`);
  }

  public async completeRentalContract(item: IInventory) {
    this.loaderService.presentLoading('Actualizando Registro...');
    await this.rentalService.completeRentalContract(item.key);
    setTimeout(() => {
      this.navCtrl.navigateForward(`/historial`);
      this.loaderService.dismissLoading();
    }, 3000);
  }

  ngDestroy() {
    this.storageService.remove('bike_details');
  }
}

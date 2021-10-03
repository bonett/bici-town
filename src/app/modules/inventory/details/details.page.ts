import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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
    private rentalService: RentalService
  ) {}

  ngOnInit() {
    this.getItemSelected();
  }

  async getItemSelected() {
    this.item = await this.storageService.get('bike_details');
  }

  public newRental(id: string): void {
    this.storageService.set('bike_selected', this.item);
    this.navCtrl.navigateForward(`/rental/new/${id}`);
  }

  ngDestroy() {
    this.storageService.remove('bike_details');
  }
}

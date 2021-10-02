import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.getItemSelected();
  }

  async getItemSelected() {
    this.item = await this.storageService.get('data_selected');
    console.log(this.item);
  }

  ngDestroy() {
    this.storageService.remove('data_selected');
  }
}

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { IHistorial } from 'src/app/models/historial.interface';
import { RentalService } from 'src/app/services/rental.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  public isLoading: boolean = true;
  public errMsg: string = 'No encontramos bicicletas rentadas';
  public historialList: Array<IHistorial> = [];
  private historialSubscription$: Subscription = null;

  constructor(
    private navCtrl: NavController,
    private rentalService: RentalService,
    private storageService: StorageService
  ) {
    this.historialSubscription$ = this.rentalService.historial$.subscribe(
      (items) => {
        this.historialList = items;
        this.handleChangeLoader(false);
      }
    );
  }

  ngOnInit() {
    this.initializeData();
  }

  private initializeData(): void {
    this.handleChangeLoader(true);
    this.getRentalHistory();
  }

  private getRentalHistory(): void {
    this.rentalService.getHistorial();
  }

  private handleChangeLoader(status: boolean): void {
    this.isLoading = status;
  }

  public showItemDetails(item: any) {
    const { uuid } = item;

    this.storageService.set('bike_details', item);
    this.navCtrl.navigateForward(`inventory/details/${uuid}`);
  }

  ngOnDestroy() {
    this.historialSubscription$.unsubscribe();
  }
}

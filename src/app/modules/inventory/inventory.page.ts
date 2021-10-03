import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { InventoryService } from 'src/app/services/inventory.service';
import { CategoryService } from 'src/app/services/category.service';
import { StorageService } from 'src/app/services/storage.service';
import { IInventory } from 'src/app/models/inventory.interface';

@Component({
  selector: 'app-inventory-page',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {
  public isLoading: boolean = true;
  public errMsg: string = 'No se encontraron bicicletas disponibles';
  public inventoryList: Array<IInventory> = [];
  public inventoryListBackup: Array<IInventory> = [];
  private inventorySubscription$: Subscription = null;
  private categorySubscription$: Subscription = null;

  constructor(
    private navCtrl: NavController,
    private storageService: StorageService,
    private inventoryService: InventoryService,
    private categoryService: CategoryService
  ) {
    this.inventorySubscription$ = this.inventoryService.inventory$.subscribe(
      (items) => {
        this.inventoryList = items;
        this.inventoryListBackup = items;
        this.handleChangeLoader(false);
      }
    );

    this.categorySubscription$ = this.categoryService.category$.subscribe(
      (categories) => {
        console.log(categories);
      }
    );
  }

  ngOnInit() {
    this.initializeData();
  }

  public searchItem(e) {
    const searchTerm = e.target.value;
    this.inventoryList = this.inventoryListBackup;

    if (!searchTerm) {
      return;
    }

    this.inventoryList = this.inventoryList.filter((item) => {
      if (item.title && searchTerm) {
        return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      }
    });
  }

  private initializeData(): void {
    this.handleChangeLoader(true);
    this.inventoryService.getInventory();
    this.categoryService.getCategories();
  }

  private handleChangeLoader(status: boolean): void {
    this.isLoading = status;
  }

  public showItemDetails(item: any) {
    const { id } = item;
    this.storageService.set('bike_details', item);
    this.navCtrl.navigateForward(`inventory/details/${id}`);
  }

  ngOnDestroy() {
    this.inventorySubscription$.unsubscribe();
    this.categorySubscription$.unsubscribe();
  }
}

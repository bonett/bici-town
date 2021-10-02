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
  public inventoryList: Array<IInventory> = [];

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
      }
    );

    this.categorySubscription$ = this.categoryService.category$.subscribe(
      (categories) => {
        console.log(categories);
      }
    );
  }

  ngOnInit() {
    this.inventoryService.getInventory();
    this.categoryService.getCategories();
  }

  public showItemDetails(item: any) {
    const { id } = item;
    this.storageService.set('data_selected', item);
    this.navCtrl.navigateForward(`inventory/details/${id}`);
  }

  ngOnDestroy() {
    this.inventorySubscription$.unsubscribe();
    this.categorySubscription$.unsubscribe();
  }
}

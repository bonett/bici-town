import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InventoryPageRoutingModule } from './inventory-routing.module';
import { InventoryPage } from './inventory.page';
import { ItemComponent } from 'src/app/components/item/item.component';
import { StorageService } from 'src/app/services/storage.service';
import { InventoryService } from 'src/app/services/inventory.service';
import { CategoryService } from 'src/app/services/category.service';
import { DetailsPage } from './details/details.page';
import { ColorsComponent } from 'src/app/components/commons/colors/colors.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, InventoryPageRoutingModule],
  declarations: [InventoryPage, ItemComponent, DetailsPage, ColorsComponent],
  providers: [InventoryService, CategoryService, StorageService],
})
export class InventoryPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InventoryPageRoutingModule } from './inventory-routing.module';
import { InventoryPage } from './inventory.page';
import { ItemComponent } from 'src/app/components/item/item.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, InventoryPageRoutingModule],
  declarations: [InventoryPage, ItemComponent],
})
export class InventoryPageModule {}

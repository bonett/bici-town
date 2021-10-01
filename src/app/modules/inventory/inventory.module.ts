import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InventoryPageRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, InventoryPageRoutingModule],
  declarations: [InventoryComponent],
})
export class InventoryPageModule {}

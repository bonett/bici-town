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
import { LoaderComponent } from 'src/app/components/commons/loader/loader.component';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';
import { RentalService } from 'src/app/services/rental.service';
import { ChipFilterComponent } from 'src/app/components/chip-filter/chip-filter.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, InventoryPageRoutingModule],
  declarations: [
    InventoryPage,
    ItemComponent,
    DetailsPage,
    ColorsComponent,
    LoaderComponent,
    NotFoundComponent,
    ChipFilterComponent,
  ],
  providers: [InventoryService, CategoryService, StorageService, RentalService],
})
export class InventoryPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HistorialPageRoutingModule } from './historial-routing.module';
import { HistorialPage } from './historial.page';
import { ItemComponent } from 'src/app/components/item/item.component';
import { LoaderComponent } from 'src/app/components/commons/loader/loader.component';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';
import { StorageService } from 'src/app/services/storage.service';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HistorialPageRoutingModule],
  declarations: [
    HistorialPage,
    ItemComponent,
    LoaderComponent,
    NotFoundComponent,
  ],
  providers: [StorageService],
})
export class HistorialPageModule {}

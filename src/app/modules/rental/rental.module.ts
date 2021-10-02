import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { RentalPageRoutingModule } from './rental-routing.module';
import { RentalPage } from './rental.page';
import { ModalOptionsComponent } from 'src/app/components/modal-options/modal-options.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    IonicModule,
    RentalPageRoutingModule,
  ],
  declarations: [RentalPage, ModalOptionsComponent],
})
export class RentalPageModule {}

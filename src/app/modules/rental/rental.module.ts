import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RentalPageRoutingModule } from './rental-routing.module';
import { RentalPage } from './rental.page';
import { ModalOptionsComponent } from 'src/app/components/modal-options/modal-options.component';
import { RentalService } from 'src/app/services/rental.service';
import { ToastService } from 'src/app/services/toast.service';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    RentalPageRoutingModule,
  ],
  declarations: [RentalPage, ModalOptionsComponent],
  providers: [RentalService, ToastService],
})
export class RentalPageModule {}

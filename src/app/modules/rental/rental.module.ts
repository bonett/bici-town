import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RentalPageRoutingModule } from './rental-routing.module';
import { RentalComponent } from './rental.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RentalPageRoutingModule],
  declarations: [RentalComponent],
})
export class RentalPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SummaryReservationPageRoutingModule } from './summary-reservation-routing.module';

import { SummaryReservationPage } from './summary-reservation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SummaryReservationPageRoutingModule
  ],
  declarations: [SummaryReservationPage]
})
export class SummaryReservationPageModule {}

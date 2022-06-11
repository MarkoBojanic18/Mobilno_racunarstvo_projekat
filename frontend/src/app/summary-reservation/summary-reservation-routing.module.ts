import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SummaryReservationPage } from './summary-reservation.page';

const routes: Routes = [
  {
    path: '',
    component: SummaryReservationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SummaryReservationPageRoutingModule {}

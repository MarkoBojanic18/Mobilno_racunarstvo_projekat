import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminDashboardPageRoutingModule } from './admin-dashboard-routing.module';

import { AdminDashboardPage } from './admin-dashboard.page';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { AdminProfileSettingsComponent } from './admin-profile-settings/admin-profile-settings.component';
import { AddNewAdminComponent } from './add-new-admin/add-new-admin.component';
import { AddNewCarComponent } from './add-new-car/add-new-car.component';
import { ViewAllCarsComponent } from './view-all-cars/view-all-cars.component';
import { ReservationsComponent } from './reservations/reservations.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminDashboardPageRoutingModule
  ],
  declarations: [AdminDashboardPage,ViewAllUsersComponent,AdminProfileSettingsComponent,AddNewAdminComponent,AddNewCarComponent,ViewAllCarsComponent,ReservationsComponent],
  entryComponents: [ViewAllUsersComponent, AdminProfileSettingsComponent, AddNewAdminComponent,AddNewCarComponent,ViewAllCarsComponent,ReservationsComponent]
})
export class AdminDashboardPageModule {}

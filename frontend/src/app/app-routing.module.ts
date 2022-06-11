import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: '',
    redirectTo: 'mainscreen',
    pathMatch: 'full'
  },
  {
    path: 'mainscreen',
    loadChildren: () => import('./mainscreen/mainscreen.module').then( m => m.MainscreenPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then( m => m.AdminDashboardPageModule)
  },
  {
    path: 'update-user/:id',
    loadChildren: () => import('./update-user/update-user.module').then( m => m.UpdateUserPageModule)
  },
  {
    path: 'car-details',
    loadChildren: () => import('./car-details/car-details.module').then( m => m.CarDetailsPageModule)
  },
  {
    path: 'update-car/:id',
    loadChildren: () => import('./update-car/update-car.module').then( m => m.UpdateCarPageModule)
  },
  {
    path: 'summary-reservation',
    loadChildren: () => import('./summary-reservation/summary-reservation.module').then( m => m.SummaryReservationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

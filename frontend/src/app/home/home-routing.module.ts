import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsPageModule } from '../car-details/car-details.module';
import { AboutUsPage } from '../pages/about-us/about-us.page';
import { CarDetailsComponent } from './car-details/car-details.component';
import { HomePageModule } from './home.module';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component:HomePage,
  },
 {
    path: 'tabs',
    component: HomePage,
    children:[
      {

        path:'page/about-us',
        loadChildren:()=>import('../pages/about-us/about-us.module').then(m=>m.AboutUsPageModule)
      },
      {
        path:'page/contact',
        loadChildren:()=>import('../pages/contact/contact.module').then(m=>m.ContactPageModule)
      },
      {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
      }
 
    ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

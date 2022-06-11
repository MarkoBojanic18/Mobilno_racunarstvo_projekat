import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { NavparamService } from '../navparam.service';
import { AddNewAdminComponent } from './add-new-admin/add-new-admin.component';
import { AddNewCarComponent } from './add-new-car/add-new-car.component';
import { AdminProfileSettingsComponent } from './admin-profile-settings/admin-profile-settings.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ViewAllCarsComponent } from './view-all-cars/view-all-cars.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {
  id:any;
  firstName: any;
  lastName: any;
  phoneNumber:any;
  email:any;
  password:any;
  admin: any;
  users: any = [];
  

  constructor(private modalController: ModalController,private route: ActivatedRoute, private router:Router, private _apiService:ApiService, private navService: NavparamService) {
    this.id = this.navService.getLoginUser();
    this.getUsers();
   }


  ngOnInit() {
  }

  openUsersModal(){
    this.modalController.create({
      component: ViewAllUsersComponent
    }).then((modal)=>{
      modal.present();
    });
  }

  openSettingsModal(){
    this.modalController.create({
      component: AdminProfileSettingsComponent
    }).then((modal)=>{
      modal.present();
    });
  }

  

  openAddNewAdminModal(){
    this.modalController.create({
      component: AddNewAdminComponent
    }).then((modal)=>{
      modal.present();
    });
  }

  
  openAddNewCarModal(){
    this.modalController.create({
      component: AddNewCarComponent,
      componentProps:{
        carOwnerId: this.id
      }
    }).then((modal)=>{
      modal.present();
    });
  }

  
  openViewCarsModal(){
    this.modalController.create({
      component: ViewAllCarsComponent
    }).then((modal)=>{
      modal.present();
    });
  }


  
  openReservationsModal(){
      this.modalController.create({
      component: ReservationsComponent
    }).then((modal)=>{
      modal.present();
    });
  }

  getUsers(){
     this._apiService.getUsers().subscribe((res:any)=>{
       this.users = res;
       this.users.forEach(user => {
         if(user.id == this.id){
           this.id = user.id;
           this.firstName = user.firstName;
           this.lastName = user.lastName;
           this.phoneNumber = user.phoneNumber;
           this.email = user.email;
           this.password = user.password;
           this.admin = user.admin;
         }
       });
    console.log("SUCCESS ===",res);
    }, (error:any) =>{
      console.log("ERROR ===",error);
    })
  }

  logOut(){
    this.router.navigateByUrl('/login');
  }

}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { NavparamService } from '../navparam.service';
import { CarDetailsComponent } from './car-details/car-details.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userId: any;
  firstName: any;
  lastName: any;
  phoneNumber:any;
  email: any;
  password: any;
  admin: any;
  users: any = [];


  id:any;
  markOfTheCar: any;
  modelOfTheCar: any;
  carMade: any;
  carCrossed: any;
  carFuelType: any;
  carCubicCapacity: any;
  carEnginePower: any;
  carTransmission: any;
  carEmissionClass: any;
  carClimate: any;
  carDoors: any;
  carBody: any;
  carSeats: any;
  carColor: any;
  carDrive: any;
  carPrice: any;
  carType: any;
  carImage: any;
  accessories: any;
  carLikes:any;
  carDislikes:any;
  carReserved:any;
  carOwnerId:any;
  cars: any = [];
  
  constructor(public _apiService: ApiService,private route: ActivatedRoute, private router:Router,private modalController: ModalController,private navService: NavparamService) {
    this.userId = navService.getLoginUser();
     this.getUsers();
     this.getCars();
  }

  addStudent(){


    // this._apiService.addStudent(data).subscribe((res:any)=>{
    // console.log("SUCCESS ===",res);
    // }, (error:any) =>{
    //   console.log("ERROR ===",error);
    // })

  }

  getUsers(){
     this._apiService.getUsers().subscribe((res:any)=>{
       this.users = res;
       this.users.forEach(user => {
         if(user.id == this.userId){
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

  getCars(){
     this._apiService.getCars().subscribe((res:any)=>{
       console.log("SUCCESS ===",res);
       this.cars = res;
    }, (error:any) =>{
      console.log("ERROR ===",error);
    })
  }

  openModal(id){
      this.modalController.create({
      component: CarDetailsComponent,
      componentProps:{
        carId: id
      }
    }).then((modal)=>{
      modal.present();
    });
  }

  refreshPage(e){
    this.getCars();
    setTimeout(() =>{
      e.target.complete();
    },2000);
  }

}

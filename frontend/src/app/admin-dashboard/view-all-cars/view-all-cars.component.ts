import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-view-all-cars',
  templateUrl: './view-all-cars.component.html',
  styleUrls: ['./view-all-cars.component.scss'],
})
export class ViewAllCarsComponent implements OnInit {
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

  constructor(private modalCtr: ModalController,public _apiService: ApiService) { 
    this.getCars();
  }

  ngOnInit() {}

  onCancel(){
     this.modalCtr.dismiss(null, 'cancel');
   }

   getCars(){
     this._apiService.getCars().subscribe((res:any)=>{
       console.log("SUCCESS ===",res);
       this.cars = res;
    }, (error:any) =>{
      console.log("ERROR ===",error);
    })
  }

  deleteCar(id){
  this._apiService.deleteCar(id).subscribe((res:any)=>{
    console.log("SUCCESS ===",res);
    this.getCars();
    }, (error:any) =>{
      console.log("ERROR ===",error);
    })
  }

}

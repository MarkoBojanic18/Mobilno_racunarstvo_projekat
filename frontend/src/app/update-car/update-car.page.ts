import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.page.html',
  styleUrls: ['./update-car.page.scss'],
})
export class UpdateCarPage implements OnInit {
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
carLikes: any;
carDislikes:any;
carReserved:any;
carOwnerId: any;

  constructor(private route: ActivatedRoute, private router: Router, private _apiService: ApiService) {
    this.route.params.subscribe((param:any) =>{
      this.id = param.id;
      this.getCar(this.id);
    })
   }

  ngOnInit() {
  }


   getCar(id){
    this._apiService.getCar(id).subscribe((res:any) =>{
      console.log("SUCCESS",res);
      let car = res[0];
      this.markOfTheCar = car.markOfTheCar;
      this.modelOfTheCar = car.modelOfTheCar;
      this.carMade = car.carMade;
      this.carCrossed = car.carCrossed;
      this.carFuelType = car.carFuelType;
      this.carCubicCapacity = car.carCubicCapacity;
      this.carEnginePower = car.carEnginePower;
      this.carTransmission = car.carTransmission;
      this.carEmissionClass = car.carEmissionClass;
      this.carClimate = car.carClimate;
      this.carDoors = car.carDoors;
      this.carBody = car.carBody;
      this.carSeats = car.carSeats;
      this.carColor = car.carColor;
      this.carDrive = car.carDrive;
      this.carPrice = car.carPrice;
      this.carType = car.carType;
      this.carImage = car.carImage;
      this.accessories = car.accessories;
      this.carLikes = car.carLikes;
      this.carDislikes = car.dislikes;
      this.carReserved = car.carReserved;
      this.carOwnerId = car.carOwnerId;
    },(err:any)=>{
      console.log("ERROR",err)
    });
  }

  updateCar(){
    let data = {
          markOfTheCar: this.markOfTheCar,
          modelOfTheCar: this.modelOfTheCar,
          carMade: this.carMade,
          carCrossed: this.carCrossed,
          carFuelType: this.carFuelType,
          carCubicCapacity: this.carCubicCapacity,
          carEnginePower: this.carEnginePower,
          carTransmission: this.carTransmission,
          carEmissionClass: this.carEmissionClass,
          carClimate: this.carClimate,
          carDoors: this.carDoors,
          carBody: this.carBody,
          carSeats: this.carSeats,
          carColor: this.carColor,
          carDrive: this.carDrive,
          carPrice: this.carPrice,
          carType: this.carType,
          carImage: this.carImage,
          accessories: this.accessories,
          carLikes: this.carLikes,
          carDislikes: this.carDislikes,
          carReserved: this.carReserved,
          carOwnerId: this.carOwnerId
    }


    this._apiService.updateCar(this.id,data).subscribe((res:any) =>{
      console.log("SUCCESS",res);
     
    },(err:any)=>{
      console.log("ERROR",err)
    });

  }

}

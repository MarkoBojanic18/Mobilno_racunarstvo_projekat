import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-new-car',
  templateUrl: './add-new-car.component.html',
  styleUrls: ['./add-new-car.component.scss'],
})
export class AddNewCarComponent implements OnInit {
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
carLikes = 0;
carDislikes = 0;
carReserved = "false";
carOwnerId;


  constructor(private modalCtr: ModalController,public _apiService: ApiService) { }

  ngOnInit() {
    console.log(`${this.carOwnerId}`)
  }

  onCancel(){
     this.modalCtr.dismiss(null, 'cancel');
   }

   addCar(){
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

    this._apiService.addCar(data).subscribe((res:any)=>{
    console.log("SUCCESS ===",res);
      alert('New car is successfully added! ');
    }, (error:any) =>{
      alert('ERROR');
      console.log("ERROR ===",error);
    })

   }

}

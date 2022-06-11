import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { format, parseISO } from 'date-fns';
import { ApiService } from '../api.service';
import { Feature, MapboxServiceService } from '../mapbox-service.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.page.html',
  styleUrls: ['./car-details.page.scss'],
})
export class CarDetailsPage implements OnInit {
  modes = ['date','time'];
  selectedMode = "date";
  showPicker = false;
  zipped = false;
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  formattedString = '';
   currentNumber = 1;
   click = false;
   addresses: string[] = [];
  selectedAddress = null;
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

  constructor(private mapboxService: MapboxServiceService, private route:ActivatedRoute,public _apiService: ApiService,private router:Router) { 
    this.setToday();
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
      this.carDislikes = car.carDislikes;
      this.carReserved = car.carReserved;
      this.carOwnerId = car.carOwnerId;
    },(err:any)=>{
      console.log("ERROR",err)
    });
  }


  //incement likes i dislikes
  incrementLikes(){
    if(this.click != true){
      this.carLikes += 1;
      this.click = true;
    }
  }

  incrementDisLikes(){
    if(this.click != true){
      this.carDislikes += 1;
      this.click = true;
    }
  }

  //ovo je za lokaciju autoComplete opcija
  search(event:any){
      const searchTerm = event.target.value.toLowerCase();
      if(searchTerm && searchTerm.length > 0){
        this.mapboxService.search_word(searchTerm).subscribe((features: Feature[])=>{
          this.addresses = features.map(feat => feat.place_name);
        });
      }else{
        this.addresses = [];
      }
  }

  onSelect(address:string){
    this.selectedAddress = address;
    this.addresses = [];
  }

  //provera da li je selektovana adresa
  checkAddress(){
    if(this.selectedAddress == null){
      return false;
    }

    return true;
  }

  // ovo je dateTime picker 
  setToday(){
    this.formattedString = format(parseISO(format(new Date(), 'yyyy-MM-dd')+ 'T09:00:00.000Z'),"dd-MM-yyyy, HH:mm");
  }

  dateChanged(value){
    this.dateValue = value;
    this.formattedString = format(parseISO(value), "dd-MM-yyyy, HH:mm");
    this.showPicker = false;
  }

  //broj dana counter
  incrementDays() {

    if(this.currentNumber == 20){
      this.currentNumber = 20;
      alert("Number of days can NOT be higher than 20");
    }
    else{
      this.currentNumber += 1;
    }
  }


  decrementDays() {

    if(this.currentNumber == 1){
      this.currentNumber = 1;
      alert("Number of days can NOT be less than 1");
    }
    else{
      this.currentNumber -= 1;
    }
  }

}

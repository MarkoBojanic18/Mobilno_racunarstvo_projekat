import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  addUser(data){
    return this.http.post('http://localhost/Mobilno_racunarstvo_projekat/backend/addUser.php',data);
  }

  getUsers(){
    return this.http.get('http://localhost/Mobilno_racunarstvo_projekat/backend/getUsers.php');
  }

  deleteUser(id){
    return this.http.delete('http://localhost/Mobilno_racunarstvo_projekat/backend/deleteUser.php?id='+id);
  }

  getUser(id){
    return this.http.get('http://localhost/Mobilno_racunarstvo_projekat/backend/getUser.php?id='+id);
  }

  updateUser(id,data){
    return this.http.put('http://localhost/Mobilno_racunarstvo_projekat/backend/updateUser.php?id='+id,data);
  }



  addCar(data){
    return this.http.post('http://localhost/Mobilno_racunarstvo_projekat/backend/addCar.php',data);
  }

  getCars(){
    return this.http.get('http://localhost/Mobilno_racunarstvo_projekat/backend/getCars.php');
  }

  getCar(id){
    return this.http.get('http://localhost/Mobilno_racunarstvo_projekat/backend/getCar.php?id='+id);
  }

  updateCar(id,data){
    return this.http.put('http://localhost/Mobilno_racunarstvo_projekat/backend/updateCar.php?id='+id,data);
  }

   deleteCar(id){
    return this.http.delete('http://localhost/Mobilno_racunarstvo_projekat/backend/deleteCar.php?id='+id);
  }




  addReservation(data){
    return this.http.post('http://localhost/Mobilno_racunarstvo_projekat/backend/addReservation.php',data);
  }
  getReservations(){
    return this.http.get('http://localhost/Mobilno_racunarstvo_projekat/backend/getReservations.php');
  }

  deleteReservation(id){
    return this.http.delete('http://localhost/Mobilno_racunarstvo_projekat/backend/deleteReservation.php?id='+id);
  }



}

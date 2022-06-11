import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  firstName: any;
  lastName: any;
  phoneNumber:any;
  email:any;
  password:any;
  admin =  "false";
  users: any = [];


  constructor(public _apiService: ApiService,private router:Router) {
    this.getUsers();
   }

  ngOnInit() {
  }

 

  addUser(){
    for(let user of this.users){
      if(user.email == this.email){
        alert("User with this email already exists in database !");
        return;
      }
    }

    let data = {
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber,
      email: this.email,
      password: this.password,
      admin: this.admin
    }

    this._apiService.addUser(data).subscribe((res:any)=>{
    console.log("SUCCESS ===",res);
     this.firstName = '';
    this.lastName = '';
    this.phoneNumber = '';
      this.email = '';
      this.password = '';
      alert('New account is successfully created! ');
      this.router.navigateByUrl('/login');
    }, (error:any) =>{
      alert('ERROR');
      console.log("ERROR ===",error);
    })

  }

   getUsers(){
     this._apiService.getUsers().subscribe((res:any)=>{
       this.users = res;
    console.log("SUCCESS ===",res);
    }, (error:any) =>{
      console.log("ERROR ===",error);
    })
  }

}

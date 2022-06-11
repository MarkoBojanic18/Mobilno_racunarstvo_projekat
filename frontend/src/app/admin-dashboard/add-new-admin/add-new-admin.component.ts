import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-new-admin',
  templateUrl: './add-new-admin.component.html',
  styleUrls: ['./add-new-admin.component.scss'],
})
export class AddNewAdminComponent implements OnInit {
  firstName: any;
  lastName: any;
  phoneNumber:any;
  email:any;
  password:any;
  admin =  "true";
  users: any = [];

  constructor(private modalCtr: ModalController,public _apiService: ApiService,private router:Router) { 
    this.getUsers();
  }

  ngOnInit() {}

  onCancel(){
     this.modalCtr.dismiss(null, 'cancel');
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

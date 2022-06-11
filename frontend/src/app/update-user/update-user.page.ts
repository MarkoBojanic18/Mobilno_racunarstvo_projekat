import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.page.html',
  styleUrls: ['./update-user.page.scss'],
})
export class UpdateUserPage implements OnInit {
  id:any;
  firstName: any;
  lastName: any;
  phoneNumber:any;
  email:any;
  password:any;
  admin: any;
  users: any = [];

  constructor(private route: ActivatedRoute, private router: Router, private _apiService: ApiService) { 
    this.route.params.subscribe((param:any) =>{
      this.id = param.id;
      this.getUser(this.id);
    })
  }

  ngOnInit() {
  }

  getUser(id){
    this._apiService.getUser(id).subscribe((res:any) =>{
      console.log("SUCCESS",res);
      let user = res[0];
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.phoneNumber = user.phoneNumber;
      this.email = user.email;
      this.password = user.password;
      this.admin = user.admin;
    },(err:any)=>{
      console.log("ERROR",err)
    });
  }

  updateUser(){
    let data = {
          firstName: this.firstName,
          lastName: this.lastName,
          phoneNumber:this.phoneNumber,
          email:this.email,
          password:this.password,
          admin: this.admin
    }


    this._apiService.updateUser(this.id,data).subscribe((res:any) =>{
      console.log("SUCCESS",res);
    },(err:any)=>{
      console.log("ERROR",err)
    });

  }

}

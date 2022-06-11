import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  email:any;
  newPassword:any;
   users: any = [];
   found = false;

   userId:any;
   userfirstName:any;
   userlastName:any;
   userphoneNumber:any;
   userAdmin:any;

  constructor(private _apiService: ApiService,private router: Router) {
    
   }

  ngOnInit() {
  }

  resetPassword(){
this.getUsers();
  }

   getUsers(){
     this._apiService.getUsers().subscribe((res:any)=>{
       this.users = res;
       console.log("SUCCESS ===",res);
       this.users.forEach(user => {
         if(user.email == this.email){
           this.userId = user.id;
            this.userfirstName = user.firstName;
            this.userlastName = user.lastName;
            this.userphoneNumber = user.phoneNumber;
            this.userAdmin = user.admin;
            this.found = true;
         }
       });

       if(this.found == true){
          this.updateUser();
       }else{
         alert("User with this email is not in database!");
       }
    
    }, (error:any) =>{
      console.log("ERROR ===",error);
    })
  }

  updateUser(){
    let data = {
          firstName: this.userfirstName,
          lastName: this.userlastName,
          phoneNumber:this.userphoneNumber,
          email:this.email,
          password:this.newPassword,
          admin: this.userAdmin
    }


    this._apiService.updateUser(this.userId,data).subscribe((res:any) =>{
      console.log("SUCCESS",res);
      alert("Password is successfully changed!");
      this.router.navigateByUrl('/login');
    },(err:any)=>{
      console.log("ERROR",err)
    });

  }



}

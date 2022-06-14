import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthService } from '../auth/auth.service';
import { NavparamService } from '../navparam.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:any;
  password:any;
  users: any = [];

  constructor(public _apiService: ApiService,private router:Router, private navService: NavparamService, private authService:AuthService) {
    
   }

  ngOnInit() {
    this.getUsers();
  }

  loginUser(){
    for(let user of this.users){
      if(user.email == this.email && user.password == this.password && user.admin == "false"){
            alert('You are successfully login!');
            this.navService.setLoginUser(user.id);
            this.authService.login();
            this.router.navigateByUrl('/home');
            return;
      }
      else if(user.email == this.email && user.password == this.password && user.admin == "true"){
            alert('You are successfully login!');
            this.authService.login();
            this.navService.setLoginUser(user.id);
            this.router.navigateByUrl('/admin-dashboard');
            return;
      }
    }

    alert('User with this credentials is not in database!');
  }

   getUsers(){
     this._apiService.getUsers().subscribe((res:any)=>{
       this.users = res;
    console.log("SUCCESS ===",res);
    }, (error:any) =>{
      console.log("ERROR ===",error);
    })
  }

  
  refreshPage(e){
    this.getUsers();
    setTimeout(() =>{
      e.target.complete();
    },1000);
  }

  facebookLogin(){}
  twitterLogin(){}
  gmailLogin(){}

 
}

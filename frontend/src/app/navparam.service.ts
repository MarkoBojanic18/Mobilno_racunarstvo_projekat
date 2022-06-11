import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavparamService {

  navData: any;
  loginUser: any;
  constructor() { }

  setNavData(navObj){
    this.navData = navObj;
  }

  getNavData(){

    return this.navData;
  }

  setLoginUser(id){
    this.loginUser = id;
  }

  getLoginUser(){
    return this.loginUser;
  }
}

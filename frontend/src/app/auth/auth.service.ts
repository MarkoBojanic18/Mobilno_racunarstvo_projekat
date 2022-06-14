import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private _isUserAuthenicated=false;
  constructor() { }


  get isUserAuthenticated(): boolean{
    return this._isUserAuthenicated;
  }

  login(){
    this._isUserAuthenicated=true;
  }

  logout(){
    this._isUserAuthenicated=false;
  }
}

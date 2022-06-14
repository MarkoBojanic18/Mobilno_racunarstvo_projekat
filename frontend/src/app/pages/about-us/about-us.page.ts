import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage /*implements OnInit, OnDestroy*/ {


    constructor() {
      console.log('constructor');
     }

    /*
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  
    ngOnInit() {
      console.log('ngOnInit');
    }
  
    ionViewWillEnter(){
      console.log('ionViewWillEnter');
    }

    ionViewDidEnter(){
      console.log('ionViewDidEnter');
    }

    ionViewWillLeave(){
      console.log('ionViewWillLeave');
    }


    ionViewDidLeave(){
      console.log('ionViewDidLeave');
    }

    ngOnDestry(){
      console.log('ngOnDestroy')
    }
*/
  
  }
  
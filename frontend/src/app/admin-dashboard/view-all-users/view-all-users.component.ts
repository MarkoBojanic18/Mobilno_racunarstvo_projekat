import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.scss'],
})
export class ViewAllUsersComponent implements OnInit {
  firstName: any;
  lastName: any;
  phoneNumber:any;
  email:any;
  password:any;
  admin:any;
  users: any = [];
  usersAdmin:any = [];
  usersUsers:any = [];

  constructor(private modalCtr: ModalController,public _apiService: ApiService) { 
    this.getUsers();
  }

  ngOnInit() {}

  onCancel(){
     this.modalCtr.dismiss(null, 'cancel');
   }

   getUsers(){
     this._apiService.getUsers().subscribe((res:any)=>{
       this.users = res;
       
      var i = 0;
      var j = 0;
       this.users.forEach(user => {
         if(user.admin == "true"){
           this.usersAdmin[i] = user;
           i = i + 1;
         }else if(user.admin == "false"){
            this.usersUsers[j] = user;
           j = j + 1;
         }
       });
    console.log("SUCCESS ===",res);
    }, (error:any) =>{
      console.log("ERROR ===",error);
    })
  }

  deleteUser(id){
  this._apiService.deleteUser(id).subscribe((res:any)=>{
    console.log("SUCCESS ===",res);
    this.getUsers();
    }, (error:any) =>{
      console.log("ERROR ===",error);
    })
  }

  
  

}

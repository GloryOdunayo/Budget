import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public firstname:String ='';
  public lastname:String ='';
  public email:String ='';
  public password:String ='';
  public userArray:any = [];
  

  constructor() { }

  ngOnInit(): void {
  }

  signup(){
    let userDetails = {firstname:this.firstname, lastname:this.lastname, email:this.email, password:this.password};
    // console.log(userDetails);
    this.userArray.push(userDetails)
    console.log(this.userArray);
  }
}

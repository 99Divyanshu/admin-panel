  
//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user:any={};
 // signupForm!: FormGroup;
  constructor( private routes: Router) { }
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"; 
  signup:any={};
  cities!: Array<any>;
  stateList:Array<any>=[{name:'Select State',cities:['Select City']},
  {name:'Uttar Pradesh',cities:['Noida','Lucknow','Varanasi']},
  {name:'Rajasthan',cities:['Jaipur','Udaipur','Jodhpur']},
  {name:'Himachal Pradesh',cities:['Shimla','Manali','Dalhousie']},
  {name:'Haryana',cities:['Gurugram','Rohtak','Faridabad']},                      
  ];

  changeCountry(count:Event)
  {
    this.cities=this.stateList.find(con=>con.name==(<HTMLInputElement>count.target).value).cities;
  }
  onSubmit()
  {
    this.user=Object.assign(this.user,this.signup);
    this.addUser(this.user);
  }

  ngOnInit(): void {
  }
 
  addUser(user: any)
  {
    //let users=[];
    if(localStorage.getItem(this.user.mail))
    {
      alert("User already exist with that e-mail");
      //users=JSON.parse(localStorage.getItem('Users')!);
      //users=[user,...users];//...is a spread operator that allows elements of array to expand in existing array
    }
    else
    {
      //users=[user];
      localStorage.setItem(this.user.mail,JSON.stringify(user));
      alert("User Registered!!");
      this.routes.navigate(['/']);
    }

  }
  
 
  
}
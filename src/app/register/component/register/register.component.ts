  
//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user:any={};
 // signupForm!: FormGroup;
  constructor( ) { }
 
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
    let users=[];
    if(localStorage.getItem('Users'))
    {
      users=JSON.parse(localStorage.getItem('Users')!);
      users=[user,...users];//...is a spread operator that allows elements of array to expand in existing array
    }
    else
    {
      users=[user];
    }
    localStorage.setItem('Users',JSON.stringify(users));
  }
 
  
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  //phone:string="+91 654 784 547";
  

 users = JSON.parse(localStorage.getItem('currentUser')||'{}');
  user:any={};
  userList:any=[{'fname':this.users.fname,'lname':this.users.lname,'mail':this.users.mail,'pnumber':this.users.pnumber,'a1':this.users.a1,'a2':this.users.a2,'country':this.users.country,'state':this.users.state,'city':this.users.city,'password':this.users.password,'confirmpassword':this.users.confirmpassword}];
  // signupForm!: FormGroup;
  constructor( private routes: Router,private toastr:ToastrService) { }
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"; 
  //signup:any=[{'fname':'','lname':'','mail':'','':'','a1':'','a2':'','country':'','state':'','city':'','password':'','confirmpassword':''}];
  
  cities!: Array<any>;
  stateList:Array<any>=[{name:'Uttar Pradesh',cities:['Select City','Noida','Lucknow','Varanasi']},
  {name:'Rajasthan',cities:['Select City','Jaipur','Udaipur','Jodhpur']},
  {name:'Himachal Pradesh',cities:['Select City','Shimla','Manali','Dalhousie']},
  {name:'Haryana',cities:['Select City','Gurugram','Rohtak','Faridabad']},                      
  ];

  changeCountry(count:Event)
  {
    this.cities=this.stateList.find(con=>con.name==(<HTMLInputElement>count.target).value).cities;
  }
  onSubmit()
  {
    if(localStorage.getItem(this.users.mail))
    {
      //console.log(JSON.stringify(this.user));

      localStorage.setItem(this.users.mail,JSON.stringify(this.userList[0]));
      
      localStorage.setItem('currentUser',JSON.stringify(this.userList[0]));
      //users=JSON.parse(localStorage.getItem('Users')!);
      //users=[user,...users];//...is a spread operator that allows elements of array to expand in existing array
      this.toastr.success('Profile Updated!!','Note:',{
        timeOut:1000,
        progressBar:true,
        progressAnimation:'increasing',
        //positionClass:'top-right-full-width',        
      });
    }
    else
    {
      this.toastr.info('Not Updated!!','Note:');

    }
  }

  ngOnInit(): void {
  }
 
 
}

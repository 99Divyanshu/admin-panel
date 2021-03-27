  
//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user:any={};
 // signupForm!: FormGroup;
  constructor( ) { }
 
  

  ngOnInit(): void {
  }
  onSubmit(signupForm:NgForm)
  {
    this.user=Object.assign(this.user,signupForm.value);
   // localStorage.setItem('user',JSON.stringify(this.user));
    this.addUser(this.user);
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
    localStorage.setItem('Users',JSON.stringify(user));
  }
 
  form_el=[{'item1':'','item2':'','item3':'','item4':'','item5':'','item6':'','item7':'','item8':'Himachal Pradesh','item9':'','item10':'','item11':''}]
  result:any=[{}];
  stateList: Array<any> = [
    { name: 'Uttar Pradesh', cities: ['Noida', 'Kanpur', 'Varanasi'] },
    { name: 'Rajasthan', cities: ['Jaipur','Kota','Udaipur'] },
    { name: 'Himachal Pradesh', cities: ['Shimla','Manali','Dalhousie'] },
    { name: 'Haryana', cities: ['Gurugram','Rohtak','Chandigarh'] },
  ];
 // cities: Array<string> =[];
 cities=[{'city':'Varansi'},{'city':'Noida'},{'city':'Delhi'},{'city':'Manali'},{'city':'Mumbai'}]
 /* changeState(count:string)
  {
    this.cities=this.stateList.find(con=>con.name==count).cities;
  }*/

  /*signupUser(data:any)
  {
    
    let url="http://httpbin.org/post"
    this.http.post(url,{
      form_el:this.form_el
    }).toPromise().then((data:any) => {
      console.log(JSON.stringify(this.form_el))
      this.result=this.form_el;
    })
    alert(JSON.stringify(this.form_el));
  }*/
}
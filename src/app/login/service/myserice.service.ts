import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MysericeService {

  constructor(private routes: Router) { }
  checkusernameandpassword(uname:string , pwd: string)
  {
    if(uname=="divyanshu" && pwd=="password")
    {
      localStorage.setItem('username',"divyanshu");
      return true;
    }
    else
    {
      return false;
    }
  }
  logOut(){
    localStorage.removeItem('username');
    this.routes.navigate(['/'])
   }
}

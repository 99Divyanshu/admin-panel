import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MysericeService {

  constructor(private routes: Router) { }
  checkusernameandpassword(uname:string , pwd: string)
  {
    let keys:any =Object.keys(localStorage);
    for (let i = 0; i < keys.length; i++) {

      let value=localStorage.getItem(keys[i]);
      if(uname==keys[i] && pwd=="password")
      {
        localStorage.setItem('currentUser',JSON.stringify(value));
        return true;
      }
      
  }
    return false;
    
}
  logOut(){
    localStorage.removeItem('currentUser');
    this.routes.navigate(['/'])
   }
}

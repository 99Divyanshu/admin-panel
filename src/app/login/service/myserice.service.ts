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

      let userList = JSON.parse(localStorage.getItem(keys[i])||'{}');
      if(uname==userList.mail && pwd==userList.password)
      {
        localStorage.setItem('currentUser',JSON.stringify(userList));
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

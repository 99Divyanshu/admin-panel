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
      if(uname==keys[i] && pwd==userList.password)
      {
        localStorage.setItem('currentUser',JSON.stringify(userList));
        return true;
      }
      
  }
    return false;
    
}
render(userList:Array<any>)
{
    let keys:any=Object.keys(localStorage);
    for(let i=0;i<keys.length;i++)
    {
      if(keys[i]!='currentUser')
      {
        let users=JSON.parse(localStorage.getItem(keys[i])||'{}');
        userList[i]={'fname':users.fname,'lname':users.lname,'mail':users.mail,'pnumber':users.pnumber,'a1':users.a1,'a2':users.a2,'country':users.country,'state':users.state,'city':users.city,'password':users.password,'confirmpassword':users.confirmpassword};
      }
    }
    return userList
}


  logOut(){
    localStorage.removeItem('currentUser');
    this.routes.navigate(['/'])
   }
}

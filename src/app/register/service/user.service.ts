import { Injectable } from '@angular/core';
//import{UserDTO} from '../component/userDTO';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  addUser(user: any)
  {
    let users: any[]=[];
    if(localStorage.getItem('Users'))
    {
      users=[user,...users]
    }
    else
    {
      users=[user];
    }
    localStorage.setItem('Users',JSON.stringify(users));
  }
}

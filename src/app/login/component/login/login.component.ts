import { Component, OnInit } from '@angular/core';
import {RouterModule,Router} from'@angular/router';
import { MysericeService } from '../../service/myserice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[MysericeService]
})
export class LoginComponent implements OnInit {

  constructor(private service:MysericeService,private routes:Router) { }
  msg:string="";

  ngOnInit(): void {
  }
  check(uname:string,p:string)
  {
    var output=this.service.checkusernameandpassword(uname,p);
    if(output==true)
    {
      this.routes.navigate(["home/home"]);
    }
    else
    {
      this.msg="Invalid username or Password!!  "
    }
  }

}

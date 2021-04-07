import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Router } from '@angular/router';
import { MysericeService } from 'src/app/login/service/myserice.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidenavForMe: EventEmitter<any>=new EventEmitter();
  constructor(public service:MysericeService,private routes:Router) { }
  users = JSON.parse(localStorage.getItem('currentUser')||'{}');
  userList:any=[{'fname':this.users.fname,'lname':this.users.lname,'mail':this.users.mail,'pnumber':this.users.pnumber,'a1':this.users.a1,'a2':this.users.a2,'country':this.users.country,'state':this.users.state,'city':this.users.city,'password':this.users.password,'confirmpassword':this.users.confirmpassword}];
  ngOnInit(): void {
  }
  toggleSidenav()
  {
    this.toggleSidenavForMe.emit();
    setTimeout(()=>{
      window.dispatchEvent(
        new Event('resize')
        );
    },300);
  }
  onHelp()
  {
    this.routes.navigate(['/home/empty']);
  }
  onSettings()
  {
    this.routes.navigate(['/home/empty']);
  }
}

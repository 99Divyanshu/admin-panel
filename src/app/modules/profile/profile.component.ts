import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  phone:string="+91 654 784 547";
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(p:string)
  {
      this.phone=p;
  }

}

import { Component, OnInit } from '@angular/core';
import { MysericeService } from 'src/app/login/service/myserice.service';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.scss']
})
export class RenderComponent implements OnInit {

  

  constructor(private service:MysericeService) { }
   headers:Array<string>=["First Name","Last Name","Phone Number","Email","City"]
  
   userList:Array<any>=[];
   ngOnInit(): void {

      this.userList=this.service.render(this.userList);
  }

}

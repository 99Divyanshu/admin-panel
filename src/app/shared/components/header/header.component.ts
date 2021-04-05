import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { MysericeService } from 'src/app/login/service/myserice.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidenavForMe: EventEmitter<any>=new EventEmitter();
  constructor(public service:MysericeService) { }

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
  
}

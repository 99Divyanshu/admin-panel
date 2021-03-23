import { Component, OnInit,EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidenavForMe: EventEmitter<any>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  toggleSidenav()
  {
    this.toggleSidenavForMe.emit()
    setTimeout(()=>{
      window.dispatchEvent(
        new Event('resize')
        );
    },300);
  }
  
}

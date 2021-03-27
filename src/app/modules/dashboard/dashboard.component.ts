import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      window.dispatchEvent(
        new Event('resize')
        );
    },300);
  }

}

import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
@Input() label?:string;
@Input() total?:string;
@Input() percentage?:string;

  chartOptions={};

  Highcharts=Highcharts;
  constructor() { }     

  ngOnInit(): void
   {
    this.chartOptions=
    {
      chart: {
       type:'area',
       backgroundColor:null,
       borderWidth:0,
       margin :[2,2,2,2],
       height:50,
       
    },
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    credits:
    {
      enabled:false
    },
    exporting:{
      enabled:false
    },
    tooltip: {
        split: true
    },
    legend: {
       enabled:false
        //backgroundColor:
            //Highcharts.defaultOptions.legend.backgroundColor || // theme
            //'rgba(255,255,255,0.25)'
    },
    series: [{
        data:[71,78,39,66]
    }]
};
setTimeout(()=>{
  window.dispatchEvent(
    new Event('resize')
    );
},300);

}

}

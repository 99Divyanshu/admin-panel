import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-line-column',
  templateUrl: './line-column.component.html',
  styleUrls: ['./line-column.component.scss']
})
export class LineColumnComponent implements OnInit {

  chartOptions={};

  Highcharts=Highcharts;  
  constructor() { }

  ngOnInit(): void 
  {
    this.chartOptions=
    {
      chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'Average Monthly Temperature and Rainfall in Delhi'
    },
    subtitle: {
        text: 'Source:imd.com'
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}°F',
            style: {
               // color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: 'Temperature',
            style: {
                //color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: 'Precipitation',
            style: {
                //color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} mm',
            style: {
                //color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
    credits:
    {
      enabled:false
    },
    exporting:{
      enabled:true
    },
    tooltip: {
        shared: true
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        x: 120,
        verticalAlign: 'top',
        y: 100,
        floating: true
        //backgroundColor:
            //Highcharts.defaultOptions.legend.backgroundColor || // theme
            //'rgba(255,255,255,0.25)'
    },
    series: [{
        name: 'Rainfall',
        type: 'column',
        yAxis: 1,
        data: [59.9, 91.5, 106.4, 129.2, 12.0, 376.0, 135.6, 188.5, 216.4, 194.1, 5.6, 154.4],
        tooltip: {
            valueSuffix: ' mm'
        }

    }, {
        name: 'Temperature',
        type: 'spline',
        data: [60.0, 76.9, 89.5, 84.5, 78.2, 91.5, 85.2, 56.5, 83.3, 98.3, 63.9, 60.6],
        tooltip: {
            valueSuffix: '°C'
        }
    }]
};
setTimeout(()=>{
  window.dispatchEvent(
    new Event('resize')
    );
},300);

    }
  }



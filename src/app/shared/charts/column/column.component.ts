import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  chartOptions={};

  Highcharts=Highcharts; 
  constructor() { }

  ngOnInit(): void {
    this.chartOptions={ chart: {
      type: 'column'
  },
  title: {
      text: ' World Population Plot'
  },
  xAxis: {
      categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
      title: {
          text: null
      }
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Population (millions)',
          align: 'high'
      },
      labels: {
          overflow: 'justify'
      }
  },
  tooltip: {
      valueSuffix: ' millions'
  },
  plotOptions: {
      bar: {
          dataLabels: {
              enabled: true
          }
      }
  },
  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor:
          Highcharts.defaultOptions.legend!.backgroundColor || '#FFFFFF',
      shadow: true
  },
  credits: {
      enabled: false
  },
  series: [{
      name: 'Year 1800',
      data: [17, 31, 65, 203, 2]
  }, {
      name: 'Year 1900',
      data: [133, 106, 947, 408, 6]
  }, {
      name: 'Year 2000',
      data: [814, 841, 3714, 727, 31]
  }, {
      name: 'Year 2016',
      data: [1216, 1001, 4436, 738, 40]
  }]
  }

}
}

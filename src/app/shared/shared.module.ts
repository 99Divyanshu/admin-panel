import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../modules/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { LineColumnComponent } from './charts/line-column/line-column.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { BarComponent } from './charts/bar/bar.component';
import { PieComponent } from './charts/pie/pie.component';
import { TableComponent } from './tables/table/table.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ChartComponent } from './charts/chart/chart.component';
import { ScatterComponent } from './charts/scatter/scatter.component';
import { ColumnComponent } from './charts/column/column.component';
import { EmptyComponent } from './empty/empty.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LineColumnComponent,
    BarComponent,
    PieComponent,
    TableComponent,
    ChartComponent,
    ScatterComponent,
    ColumnComponent,
    EmptyComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatSidenavModule
    
    

  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LineColumnComponent,
    BarComponent,
    PieComponent,TableComponent,
    ScatterComponent,
    ColumnComponent
    
  ]
})
export class SharedModule { }

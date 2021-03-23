import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
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




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LineColumnComponent,
    BarComponent,
    PieComponent
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
    

  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LineColumnComponent,
    BarComponent,
    PieComponent
  ]
})
export class SharedModule { }

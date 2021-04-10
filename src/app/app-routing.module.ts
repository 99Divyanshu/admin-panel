import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AuthGuard } from './login/auth/auth.guard';
import { LoginComponent } from './login/component/login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { RegisterComponent } from './register/component/register/register.component';
import { RenderComponent } from './modules/render/render.component';
import { ChartComponent } from './shared/charts/chart/chart.component';
import { EmptyComponent } from './shared/empty/empty.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
 
  {
  path:'home',
  component:DefaultComponent,canActivate:[AuthGuard],
  children:[
    {
    path:'home',
    component:DashboardComponent,
  },
    {path:'profile',
    component: ProfileComponent,
    },
    {path:'data',component:RenderComponent},
    {

      path:'charts',
      component:ChartComponent
    },
    {
      path:'empty',
      component:EmptyComponent
    }
    //{path:'',redirectTo:'dashboard',pathMatch:'full'}
  ]
  },
  
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

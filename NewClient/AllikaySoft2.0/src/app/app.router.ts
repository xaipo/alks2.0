/**
 * Created by xaipo on 12/29/2017.
 */
/**
 * Created by xaipo on 11/22/2017.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './Components/Administrator/dashboard/dashboard.component';
import {InitialComponent} from './Components/Generic/initial/initial.component';
import {LoginComponent} from './Components/Generic/login/login.component';
import {DocsDashboardComponent} from './Components/Doctors/docs-dashboard/docs-dashboard.component';



const appRoutes: Routes = [
  {
    path: 'admin-dashboard', component: DashboardComponent,
    children: [
      {
        path: 'init',
        component: InitialComponent
      },
      {
        path: '**',
        component: InitialComponent

      }
    ]
  },
  {
    path: 'docs-dashboard', component: DocsDashboardComponent,
    children: [
      {
        path: 'init',
        component: InitialComponent
      },
      {
        path: '**',
        component: InitialComponent

      }
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: '**', component: LoginComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

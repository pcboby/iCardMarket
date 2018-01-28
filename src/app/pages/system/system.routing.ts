import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  SystemComponent
} from './system.component';

const routes: Routes = [{
  path: '',
  component: SystemComponent,
  children: [{
    path: '',
    redirectTo: 'welcome'
  }, {
    path: 'about',
    loadChildren: './modules/about/about.module#AboutModule'
  }, {
    path: 'config',
    loadChildren: './modules/config/config.module#ConfigModule'
  }, {
    path: 'tenants',
    loadChildren: './modules/tenants/tenants.module#TenantsModule'
  }, {
    path: 'welcome',
    loadChildren: './modules/welcome/welcome.module#WelcomeModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRouting {}

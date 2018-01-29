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
    redirectTo: 'tenants'
  }, {
    path: 'config',
    loadChildren: './modules/config/config.module#ConfigModule'
  }, {
    path: 'tenants',
    loadChildren: './modules/tenants/tenants.module#TenantsModule'
    }, {
      path: 'log',
      loadChildren: './modules/log/log.module#LogModule'
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRouting {}

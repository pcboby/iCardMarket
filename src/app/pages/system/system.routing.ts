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
    redirectTo: 'config'
  }, {
    path: 'config',
    loadChildren: './modules/config/config.module#ConfigModule'
  }, {
    path: 'tenants',
    loadChildren: './modules/tenants/tenants.module#TenantsModule'
  }, {
    path: 'labels',
    loadChildren: './modules/labels/labels.module#LabelsModule'
  }, {
    path: 'statistics',
    loadChildren: './modules/statistics/statistics.module#StatisticsModule'
  }, {
    path: 'logs',
    loadChildren: './modules/logs/logs.module#LogsModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRouting {}

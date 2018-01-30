import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  LayoutComponent
} from './layout.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [{
    path: '',
    redirectTo: 'dashboard'
  }, {
    path: 'dashboard',
    loadChildren: '../../pages/dashboard/dashboard.module#DashboardModule'
  }, {
    path: 'market',
    loadChildren: '../../pages/market/market.module#MarketModule'
  }, {
    path: 'market',
    loadChildren: '../../pages/market/market.module#MarketModule'
  }, {
    path: 'works',
    loadChildren: '../../pages/works/works.module#WorksModule'
  }, {
    path: 'tenant',
    loadChildren: '../../pages/tenant/tenant.module#TenantModule'
  }, {
    path: 'system',
    loadChildren: '../../pages/system/system.module#SystemModule'
  }, {
    path: 'help',
    loadChildren: '../../pages/help/help.module#HelpModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRouting {}

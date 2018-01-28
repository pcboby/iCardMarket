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
    path: 'cardMarket',
    loadChildren: '../../pages/cardMarket/cardMarket.module#CardMarketModule'
  }, {
    path: 'appMarket',
    loadChildren: '../../pages/appMarket/appMarket.module#AppMarketModule'
  }, {
    path: 'desktop',
    loadChildren: '../../pages/desktop/desktop.module#DesktopModule'
  }, {
    path: 'tenant',
    loadChildren: '../../pages/tenant/tenant.module#TenantModule'
  }, {
    path: 'system',
    loadChildren: '../../pages/system/system.module#SystemModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRouting {}

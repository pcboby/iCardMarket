import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  TenantComponent
} from './tenant.component';

const routes: Routes = [{
  path: '',
  component: TenantComponent,
  children: [{
    path: '',
    redirectTo: 'basic'
  }, {
    path: 'apps',
    loadChildren: './modules/apps/apps.module#AppsModule'
  }, {
    path: 'basic',
    loadChildren: './modules/basic/basic.module#BasicModule'
  }, {
    path: 'cards',
    loadChildren: './modules/cards/cards.module#CardsModule'
  }, {
    path: 'duty',
    loadChildren: './modules/duty/duty.module#DutyModule'
  }, {
    path: 'person',
    loadChildren: './modules/person/person.module#PersonModule'
  }, {
    path: 'role',
    loadChildren: './modules/role/role.module#RoleModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantRouting {}

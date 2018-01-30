import {
    NgModule
} from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';
import {
    MarketComponent
} from './market.component';

const routes: Routes = [{
    path: '',
    component: MarketComponent,
    children: [{
        path: '',
        redirectTo: 'cardMarket'
    }, {
        path: 'cardMarket',
        loadChildren: './modules/cardMarket/cardMarket.module#CardMarketModule'
    }, {
        path: 'appMarket',
        loadChildren: './modules/appMarket/appMarket.module#AppMarketModule'
    }]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MarketRouting { }

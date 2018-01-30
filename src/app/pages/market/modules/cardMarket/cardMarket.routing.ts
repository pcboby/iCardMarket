import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardMarketComponent } from './cardMarket.component';

const routes: Routes = [
    {
        path: '',
        component: CardMarketComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CardMarketRouting { }

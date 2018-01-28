import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppMarketComponent } from './appMarket.component';

const routes: Routes = [
    {
        path: '',
        component: AppMarketComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppMarketRouting { }

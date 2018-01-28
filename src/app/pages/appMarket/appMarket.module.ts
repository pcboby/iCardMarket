import {
    AppMarketComponent
} from './appMarket.component';
import {
    AppMarketRouting
} from './appMarket.routing';

import {
    NgModule
} from '@angular/core';


@NgModule({
    imports: [
        AppMarketRouting
    ],
    declarations: [AppMarketComponent]
})
export class AppMarketModule { }

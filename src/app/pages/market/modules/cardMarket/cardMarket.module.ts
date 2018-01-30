import {
    CardMarketComponent
} from './cardMarket.component';
import {
    CardMarketRouting
} from './cardMarket.routing';

import {
    NgModule
} from '@angular/core';


@NgModule({
    imports: [
        CardMarketRouting
    ],
    declarations: [CardMarketComponent]
})
export class CardMarketModule { }

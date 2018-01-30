import {
    MarketComponent
} from './market.component';
import {
    MarketRouting
} from './market.routing';

import {
    NgModule
} from '@angular/core';


@NgModule({
    imports: [
        MarketRouting
    ],
    declarations: [MarketComponent]
})
export class MarketModule { }

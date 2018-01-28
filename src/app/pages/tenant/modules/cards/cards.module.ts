import {
    CardsComponent
} from './cards.component';
import {
    CardsRouting
} from './cards.routing';

import {
    NgModule
} from '@angular/core';


@NgModule({
    imports: [
        CardsRouting
    ],
    declarations: [CardsComponent]
})
export class CardsModule { }

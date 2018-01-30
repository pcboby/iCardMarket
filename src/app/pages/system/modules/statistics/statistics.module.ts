import {
    StatisticsComponent
} from './statistics.component';
import {
    StatisticsRouting
} from './statistics.routing';

import {
    NgModule
} from '@angular/core';


@NgModule({
    imports: [
        StatisticsRouting
    ],
    declarations: [StatisticsComponent]
})
export class StatisticsModule { }

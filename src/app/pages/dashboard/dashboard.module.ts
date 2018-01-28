import {
    DashboardComponent
} from './dashboard.component';
import {
    DashboardRouting
} from './dashboard.routing';

import {
    NgModule
} from '@angular/core';


@NgModule({
    imports: [
        DashboardRouting
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule { }

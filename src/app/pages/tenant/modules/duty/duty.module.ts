import {
    DutyComponent
} from './duty.component';
import {
    DutyRouting
} from './duty.routing';

import {
    NgModule
} from '@angular/core';


@NgModule({
    imports: [
        DutyRouting
    ],
    declarations: [DutyComponent]
})
export class DutyModule { }

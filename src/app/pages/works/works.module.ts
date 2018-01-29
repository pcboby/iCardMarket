import {
    WorksComponent
} from './works.component';
import {
    WorksRouting
} from './works.routing';

import {
    NgModule
} from '@angular/core';


@NgModule({
    imports: [
        WorksRouting
    ],
    declarations: [WorksComponent]
})
export class WorksModule { }

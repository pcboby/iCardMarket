import {
    BasicComponent
} from './basic.component';
import {
    BasicRouting
} from './basic.routing';

import {
    NgModule
} from '@angular/core';


@NgModule({
    imports: [
        BasicRouting
    ],
    declarations: [BasicComponent]
})
export class BasicModule { }

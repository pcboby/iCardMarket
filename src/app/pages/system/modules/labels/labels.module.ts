import {
    LabelsComponent
} from './labels.component';
import {
    LabelsRouting
} from './labels.routing';

import {
    NgModule
} from '@angular/core';


@NgModule({
    imports: [
        LabelsRouting
    ],
    declarations: [LabelsComponent]
})
export class LabelsModule { }

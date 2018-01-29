import {
    LogComponent
} from './log.component';
import {
    LogRouting
} from './log.routing';

import {
    NgModule
} from '@angular/core';


@NgModule({
    imports: [
        LogRouting
    ],
    declarations: [LogComponent
    ]
})
export class LogModule { }

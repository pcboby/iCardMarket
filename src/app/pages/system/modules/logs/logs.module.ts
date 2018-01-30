import {
    LogsComponent
} from './logs.component';
import {
    LogsRouting
} from './logs.routing';

import {
    NgModule
} from '@angular/core';


@NgModule({
    imports: [
        LogsRouting
    ],
    declarations: [LogsComponent
]
})
export class LogsModule { }

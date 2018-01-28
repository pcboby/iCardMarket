import {
    DesktopComponent
} from './desktop.component';
import {
    DesktopRouting
} from './desktop.routing';

import {
    NgModule
} from '@angular/core';


@NgModule({
    imports: [
        DesktopRouting
    ],
    declarations: [DesktopComponent]
})
export class DesktopModule { }

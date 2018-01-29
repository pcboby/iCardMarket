import {
    HelpComponent
} from './help.component';
import {
    HelpRouting
} from './help.routing';

import {
    NgModule
} from '@angular/core';


@NgModule({
    imports: [
        HelpRouting
    ],
    declarations: [HelpComponent]
})
export class HelpModule { }

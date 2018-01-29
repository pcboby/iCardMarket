import {
    WelcomeComponent
} from './welcome.component';
import {
    WelcomeRouting
} from './welcome.routing';

import {
    NgModule
} from '@angular/core';


@NgModule({
    imports: [
        WelcomeRouting
    ],
    declarations: [WelcomeComponent]
})
export class WelcomeModule { }

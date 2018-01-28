import {
    ConfigComponent
} from './config.component';
import {
    ConfigRouting
} from './config.routing';

import {
    NgModule
} from '@angular/core';


@NgModule({
    imports: [
        ConfigRouting
    ],
    declarations: [ConfigComponent]
})
export class ConfigModule { }

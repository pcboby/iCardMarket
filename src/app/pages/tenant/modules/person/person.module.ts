import {
    PersonComponent
} from './person.component';
import {
    PersonRouting
} from './person.routing';

import {
    NgModule
} from '@angular/core';


@NgModule({
    imports: [
        PersonRouting
    ],
    declarations: [PersonComponent]
})
export class PersonModule { }

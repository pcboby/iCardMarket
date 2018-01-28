import {
    RoleComponent
} from './role.component';
import {
    RoleRouting
} from './role.routing';

import {
    NgModule
} from '@angular/core';


@NgModule({
    imports: [
        RoleRouting
    ],
    declarations: [RoleComponent]
})
export class RoleModule { }

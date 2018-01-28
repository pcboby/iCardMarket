import {
    TenantsComponent
} from './tenants.component';
import {
    TenantsRouting
} from './tenants.routing';

import {
    NgModule
} from '@angular/core';


@NgModule({
    imports: [
        TenantsRouting
    ],
    declarations: [TenantsComponent]
})
export class TenantsModule { }

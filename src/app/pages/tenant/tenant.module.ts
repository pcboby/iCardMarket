import {
    TenantComponent
} from './tenant.component';
import {
    TenantRouting
} from './tenant.routing';

import {
    NgModule
} from '@angular/core';


@NgModule({
    imports: [
        TenantRouting
    ],
    declarations: [TenantComponent]
})
export class TenantModule { }

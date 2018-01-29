import {
    DocumentComponent
} from './document.component';
import {
    DocumentRouting
} from './document.routing';

import {
    NgModule
} from '@angular/core';


@NgModule({
    imports: [
        DocumentRouting
    ],
    declarations: [DocumentComponent]
})
export class DocumentModule { }

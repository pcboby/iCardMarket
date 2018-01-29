import {
  AboutComponent
} from './about.component';
import {
  AboutRouting
} from './about.routing';

import {
  NgModule
} from '@angular/core';


@NgModule({
  imports: [
    AboutRouting
  ],
  declarations: [AboutComponent]
})
export class AboutModule {}

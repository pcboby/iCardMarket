import {
  AppsComponent
} from './apps.component';
import {
  AppsRouting
} from './apps.routing';


import {
  NgModule
} from '@angular/core';


@NgModule({
  imports: [
    AppsRouting
  ],
  declarations: [AppsComponent]
})
export class AppsModule {}

import {
  SystemComponent
} from './system.component';
import {
  SystemRouting
} from './system.routing';

import {
  NgModule
} from '@angular/core';


@NgModule({
  imports: [
    SystemRouting
  ],
  declarations: [SystemComponent]
})
export class SystemModule {}

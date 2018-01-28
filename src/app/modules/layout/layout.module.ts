import {
  LayoutComponent
} from './layout.component';
import {
  LayoutRouting
} from './layout.routing';

import {
  NgModule
} from '@angular/core';
import {
    HeaderComponent, FooterComponent, SilderComponent, LoaderComponent
} from '../../components';
import {
  ElModule
} from 'element-angular';
import {
  CommonModule
} from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    LayoutRouting,
    ElModule.forRoot()
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SilderComponent,
    LoaderComponent
  ]
})
export class LayoutModule {}

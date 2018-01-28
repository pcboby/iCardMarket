import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  NgModule
} from '@angular/core';


import {
  AppComponent
} from './app.component';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  AppRouting
} from './app.routing';
import {
  CommonModule
} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

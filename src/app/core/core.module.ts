import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import { LoaderService } from './services/loader.service';

@NgModule({
  imports: [
  CommonModule
  ],
  providers: [LoaderService]
})
export class CoreModule {}

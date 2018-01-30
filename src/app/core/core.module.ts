import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  LoaderService
} from './services/loader.service';
import {
  TenantService
} from './services/tenant.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [LoaderService, TenantService]
})
export class CoreModule {}

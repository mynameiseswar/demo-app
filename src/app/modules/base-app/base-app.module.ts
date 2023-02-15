import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseAppRoutingModule } from './base-app-routing.module';
import { BaseAppComponent } from './base-app.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    BaseAppComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    BaseAppRoutingModule
  ]
})
export class BaseAppModule { }

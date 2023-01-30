import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { GetFullNamePipe } from 'src/app/utils/get-full-name.pipe';
import { FindSumPipe } from './find-sum.pipe';
import { ShareModule } from 'src/app/utils/share/share.module';


@NgModule({
  declarations: [
    DashboardComponent,
    GetFullNamePipe,
    FindSumPipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ShareModule
  ]
})
export class DashboardModule { }

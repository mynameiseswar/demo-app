import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardDetailsComponent } from './dashboard-details/dashboard-details.component';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardDetailsComponent,
    DashboardListComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }

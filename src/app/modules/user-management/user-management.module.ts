import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import { MessageComponent } from './message/message.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    UserManagementComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    UserManagementRoutingModule
  ]
})
export class UserManagementModule { }

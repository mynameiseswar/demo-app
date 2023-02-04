import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersListRoutingModule } from './users-list-routing.module';
import { UsersListComponent } from './users-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListService } from './user-list.service';

@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    CommonModule,
    UsersListRoutingModule,
    HttpClientModule,
  ],
  providers: [
    UserListService
  ]
})
export class UsersListModule { }

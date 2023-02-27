import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationService
  ]
})
export class AuthenticationModule { }

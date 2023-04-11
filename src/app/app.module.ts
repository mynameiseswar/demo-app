import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingMoudle } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanactiveService } from './canactive.service';
import { AppService } from './app.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './app.interceptor';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingMoudle
  ],
  providers: [
    CanactiveService,
    AppService,
    {
      provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

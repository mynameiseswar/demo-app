import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingMoudle } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanactiveService } from './canactive.service';
import { AppService } from './app.service';


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
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

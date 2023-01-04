import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpLineComponent } from './help-line/help-line.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppButtonComponent } from './app-button/app-button.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HelpLineComponent,
    HeaderComponent,
    FooterComponent,
    AppButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/button/button.component';
import { ListComponent } from './student/list/list.component';
import { DetailsComponent } from './student/details/details.component';
import { UtillService } from './utill.service';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ListComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    UtillService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/button/button.component';
import { ListComponent } from './student/list/list.component';
import { DetailsComponent } from './student/details/details.component';
import { UtillService } from './utill.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { SettingsComponent } from './pages/settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ListComponent,
    DetailsComponent,
    DashboardComponent,
    ProductsListComponent,
    UsersListComponent,
    SettingsComponent
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

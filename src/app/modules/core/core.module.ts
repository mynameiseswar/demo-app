import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    MenuComponent
  ]

})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found.component';
import { RouterModule, Routes } from '@angular/router';

const pageNotFoundRouting: Routes = [
  {
    path: '',
    component: PageNotFoundComponent
  }
]


@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pageNotFoundRouting)
  ],
  exports: [
    RouterModule
  ]
})
export class PageNotFoundModule { }

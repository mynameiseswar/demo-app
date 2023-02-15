import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseAppComponent } from './base-app.component';

const routes: Routes = [
  {
    path: '',
    component: BaseAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseAppRoutingModule { }

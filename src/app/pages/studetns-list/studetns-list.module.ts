import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudetnsListRoutingModule } from './studetns-list-routing.module';
import { StudetnsListComponent } from './studetns-list.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { StudetnsListService } from './studetns-list.service';


@NgModule({
  declarations: [
    StudetnsListComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    StudetnsListRoutingModule
  ],
  providers:[
    StudetnsListService
  ]
})
export class StudetnsListModule { }

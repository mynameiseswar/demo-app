import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackComponent } from './feedback.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { FeedbackService } from './feedback.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FeedbackComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    FeedbackRoutingModule,
    HttpClientModule
  ],
  providers:[
    FeedbackService
  ]
})
export class FeedbackModule { }

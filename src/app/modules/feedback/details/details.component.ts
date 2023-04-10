import { Component } from '@angular/core';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers:[]
})
export class DetailsComponent {
  selectedUsename: string ="Defautl Name";

  constructor(
    private feedbackService: FeedbackService
  ){

 


    this.feedbackService.getUsername().subscribe(
      (username: string) =>{
        this.selectedUsename = username;
      }
    );
  }



}

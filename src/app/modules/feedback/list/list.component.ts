import { Component } from '@angular/core';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers:[]
})
export class ListComponent {




  usersList: Array<string> = [
    'Raju',
    'Ramu',
    'Venkat',
    'Priya',
    'Anil'
  ];

  selectedUser: string ='';


  constructor(
    private feedbackService: FeedbackService
  ){}
  userSelect(username: string){
    this.feedbackService.setUsername(username); 
    this.selectedUser = username;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../Student';
import { StudetnsListService } from '../studetns-list.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  selectedStudentInformation:Student | undefined;
  constructor(
    private router: Router,
    private studetnsListService: StudetnsListService
  ){}

  ngOnInit(): void {
      console.log("Get Selected Studnet Information")

     this.selectedStudentInformation = this.studetnsListService.getSelectedStudent();
  }



  onGoBack(){
    this.router.navigate(['/students-list/list']);
  }
}

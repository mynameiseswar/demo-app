import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../Student';
import { StudetnsListService } from '../studetns-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  constructor(
    private router: Router,
    private studetnsListService: StudetnsListService
  ){

  }


  studentsList: Array<Student> = [
    {
      id: 1001,
      name: "Raju",
      address:'Hyd'
    },
    {
      id: 1002,
      name: "Siva",
      address:'Hyd'
    },
    {
      id: 1003,
      name: "Rani",
      address:'Hyd'
    },
    {
      id: 1003,
      name: "Rani",
      address:'Vizag'
    }
  ];

  onStudnetClick(selectedStudnet: Student){
    console.log("Studnet Information");
    console.log(selectedStudnet);
    this.studetnsListService.setSeletedStudent(selectedStudnet)
    this.router.navigate(['/students-list/details']);
  }
}

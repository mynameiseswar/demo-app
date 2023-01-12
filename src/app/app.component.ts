import { Component } from '@angular/core';
import { Student } from './utils/Student';


export interface StudentObject{
  name: string;
  address?: string;
  mobile?: string;
  isStudent: boolean
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // showTitle = 'Show';

  selectedSudent: Student | undefined;
  studentList: Array<Student> = [
    {
      name: "Raju",
      age: 30,
      address: 'Hyd',
      mobile: '+91-234-567-890'
    },
    {
      name: "Siva",
      age: 34,
      address: 'Hyd',
      mobile: '+91-234-567-890'
    },
    {
      name: "Phani",
      age: 24,
      address: 'Vizag',
      mobile: '+91-234-567-890'
    },
    {
      name: "Venkat",
      age: 30,
      address: 'Del',
      mobile: '+91-224-567-890'
    },
    {
      name: "Naga",
      age: 25,
      address: 'Del',
      mobile: '+91-224-567-890'
    }
  ];

  // *ngFor

  // Create Custome Student Button component and render in the left side of the page
  // @Input Each studnet data pass to created student button componet 
  // @Output Pass the data from chaild to parent based on student buton click.
  // In Parent show the student detail on the right side of the page;

  boxStatus: boolean = true;

  onButtonAction(event: string){
    console.log(event);

    if(event.toLocaleLowerCase() == 'show'){
        this.boxStatus = true;
    }else if(event.toLocaleLowerCase() == 'hide'){
      this.boxStatus = false;
    }else if(event.toLocaleLowerCase() == 'show/hide'){
      this.boxStatus = !this.boxStatus;
    }
  }

  onStudentClick(student: Student){
    console.log(student);
    this.selectedSudent = student;
  }


  // showButton="Show";

  // String
  // number
  // Boolean
  // Array
  // Object -
  // Custome Data type



    constructor(){
      /* for(
        let i=0;i< this.studentList.length;i++
      ){
        console.log(this.studentList[i].name)
      } */
    }




}
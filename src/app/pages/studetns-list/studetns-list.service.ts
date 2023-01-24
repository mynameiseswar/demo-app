import { Injectable } from '@angular/core';
import { Student } from './Student';

@Injectable({
  providedIn: 'root'
})
export class StudetnsListService {

  private selectedStudent: Student |undefined;

  constructor() { }

  setSeletedStudent(student: Student){
    console.log(student);
    this.selectedStudent = student;
    console.log("Selected Studnet Information is saved.")
  }

  getSelectedStudent(){
    return this.selectedStudent;
  }
}

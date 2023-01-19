import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Student } from './student/list/list.component';

@Injectable({
  providedIn: 'root'
})
export class UtillService {

  // private selectedStudent: Student | undefined;

  private selectedStudent: Subject<Student> = new Subject();

  constructor() { }


  setStudent(student: Student){
    // this.selectedStudent = student;
    this.selectedStudent.next(student);
    console.log(this.selectedStudent);
  }

  getStudent(){
    console.log('Get Studnet Information');
    return this.selectedStudent.asObservable();
  }
}

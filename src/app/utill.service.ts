import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Student } from './student/list/list.component';

@Injectable({
  providedIn: 'root'
})
export class UtillService {

  // private selectedStudent: Student | undefined;

  private selectedStudent: Subject<Student> = new Subject();

  constructor() { }


  /**
   * @param student 
   *  {
   *    id: number;
   *    name: string;
   *    addrss?: string
   *  }
   *  This method will store the selected student information in the local variable.
   */


  setStudent(student: Student): void{
    // this.selectedStudent = student;
    this.selectedStudent.next(student);
    console.log(this.selectedStudent);
  }

  /**
   *  No paramaters
   * @returns Observable
   * This methos will return the seleted studnet informatino as a obser
   */
  getStudent(){
    console.log('Get Studnet Information');
    return this.selectedStudent.asObservable();
  }

  getApplicationName(): string{
    return 'Angular APP';
  }
}

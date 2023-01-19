import { Component } from '@angular/core';
import { ButtonEmitObject } from 'src/app/shared/button/button.component';
import { UtillService } from 'src/app/utill.service';

export interface Student {
  id: number;
  name: string;
  address: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  constructor(
    private utilService: UtillService
  ){

  }

  

  studentList: Array<Student> = [
    {
      id: 1001,
      name: 'Raju',
      address: 'HYD'
    },
    {
      id: 1002,
      name: 'Venkat',
      address: 'DEL'
    },
    {
      id: 1003,
      name: 'Ramu',
      address: 'VIZAG'
    },
    {
      id: 1004,
      name: 'Phani',
      address: 'HYD'
    },
    {
      id: 1005,
      name: 'Prasad',
      address: 'DEL'
    },
    {
      id: 1006,
      name: 'Srikanth',
      address: 'DEL'
    }
  ]

  buttonClick(event:ButtonEmitObject){
    console.log(event);
    this.studentList.forEach(
      (student) =>{
        if(student.id == event.id){
          this.utilService.setStudent(student);
        }
      }
    );
  }

}

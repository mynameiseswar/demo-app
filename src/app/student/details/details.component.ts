import { Component } from '@angular/core';
import { UtillService } from 'src/app/utill.service';
import { Student } from '../list/list.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  seletedStudent: Student | undefined;

  constructor(
    private utillService: UtillService
  ){

   

   this.utillService.getStudent().subscribe(
    (student) =>{
      console.log(student);
      this.seletedStudent = student;
    }
   );
  }
}

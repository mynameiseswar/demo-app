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


  // showButton="Show";

  // String
  // number
  // Boolean
  // Array
  // Object -
  // Custome Data type

    studentList: Array<any> = [
      {
        name:'Raju'
      },
      {
        name:'Siva'
      },
      {
        name:'Anil'
      },
      {
        name:'Phani'
      },
      {
        name:'Venkat'
      },
      {
        name:'Raju'
      },
      {
        name:'Siva'
      },
      {
        name:'Anil'
      },
      {
        name:'Phani'
      },
      {
        name:'Venkat'
      },
      {
        name:'Raju'
      },
      {
        name:'Siva'
      },
      {
        name:'Anil'
      },
      {
        name:'Phani'
      },
      {
        name:'Venkat'
      },
    ]


    constructor(){
      /* for(
        let i=0;i< this.studentList.length;i++
      ){
        console.log(this.studentList[i].name)
      } */
    }




}
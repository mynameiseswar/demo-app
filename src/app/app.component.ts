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


Student1: Array<Student> = [
  {
    name: 'Raju',
    age: 20,
    address: 'Hyd'
  },
  {
    name: 'Siva',
    age: 24,
    address:'Vizag'

  }
]


  

studnet: Student | undefined;

x = 20;
y = 30;

c: number | undefined;


boxStatus: boolean = true;

constructor(){

}

sum(){
  console.log("Sum Calculation init")
  this.c = this.x + this.y;
}

multi(){
this.c = this.x * this.y;
}

sub(){
  this.c = this.x - this.y;
}
mod(){
  this.c = this.x % this.y;
}

showBox(){
  this.boxStatus = true;
}
hideBox(){
  this.boxStatus = false;
}

updateBoxStatus(){
  console.log(this.boxStatus);
  // this.boxStatus = false;
  // if(this.boxStatus === true){
  //   this.boxStatus = false;
  // }else{
  //   this.boxStatus = true;
  // }

  this.boxStatus = this.boxStatus == true ? false : true;

  //this.boxStatus = !this.boxStatus;
}


}
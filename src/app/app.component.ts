import { Component } from '@angular/core';


export interface StudentObject{
  name: string;
  address?: string;
  mobile?: string;
  isStudent: boolean
}

export interface Student{
  name: string;
  age: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
// string

// location: string | number | boolean | undefined | null ;

location: any;

userName = 'raju';


updateMyLocation(){
  this.location = "Hyd";
  this.location = 10;
  this.location = true;
  this.location = undefined;
  this.location = null;
}


fisrName = 'Naga';
lastname = 'Kumar';




//Number

x = 123.123;

y = '20';


// boolean


isStudent: boolean = true;
isTeacher: boolean = false;



// Array

abc: Array<number> = [10,20,30];

abc1: Array<string> = ['User 1', 'User 2', 'User 3'];

abc2: Array<boolean> = [true, false, true];

abc3: Array<number | string> = [10,20,'User1','User2']

abc4: Array<number | string | boolean> = [10,20,'User1','User2', true]
abc5: Array<any> = [10,20,'User1','User2', true]


abc6: Array<Student> = [
  {
    name: 'Raju',
    age: 10
  },
  {
    name: 'Siva',
    age: 20
  },
  {
    name: 'Kumar',
    age: 30
  }
]



// Objects

student: StudentObject = {
  name: "Raju",
  isStudent: false
};








constructor(){

  this.student ={
    name : "Siva",
    isStudent: true
  };

  this.sum();
  console.log(Number(this.fisrName) + this.lastname);
}

sum(){
  console.log(Number(this.x) + Number(this.y))
}












 
}

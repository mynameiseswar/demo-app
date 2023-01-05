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


}
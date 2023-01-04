import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-app';


  showMe ="show";


  x = 10;

  y= 5;

  // Strings

  // Number

  // Boolen

  isStudent: boolean = true;

  // Object

  student = {
    sNo: 123,
    name: "Raju",
    address: "HYd",
    mobile: 123
  }

  // Array

  marks =[10,23,12,34,23,11];


 
}

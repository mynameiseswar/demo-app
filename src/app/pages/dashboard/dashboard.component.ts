import { Component } from '@angular/core';
import { Student } from '../studetns-list/Student';

export interface MathObject{
  x: number;
  y: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  loginTime: Date = new Date();

  sudentList: Student = {
      id: 1001,
      name: "raJu",
      address: "hyd",
      fee: 10000.123454789,
      percentage: 98
  };


  
  userObject = {
    fName: 'Raju',
    lName: 'Naga'
  }


  sumObject = {
    x: 10,
    y: 20
  };

  mathObject: MathObject = {
    x: 10,
    y: 20
  }



  getStudnetPercentage(p: any){
    return `${Number(p)/100}`;
  }
}

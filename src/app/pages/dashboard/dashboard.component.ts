import { Component } from '@angular/core';
import { Student } from '../studetns-list/Student';

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


  getStudnetPercentage(p: any){
    return Number(p)/100;
  }
}

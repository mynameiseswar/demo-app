import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface MathObject {
  x: number;
  y: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  onSubmit(ref: NgForm | any) {
    console.log('ON Form Submited.');

    console.log(ref);
  }

  onRestFrom(ref: NgForm) {
    ref.reset();
  }

}

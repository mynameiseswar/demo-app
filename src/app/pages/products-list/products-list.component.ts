import { Component } from '@angular/core';
import { MathObject } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  showElements: boolean = true;
  mathObject: MathObject = {
    x: 10,
    y: 20
  }

  abcObject: MathObject = {
    x: 100,
    y: 200
  }

  updateData(){
    this.mathObject.x = 40;
    this.mathObject.y = 70;

   // this.renderElements = true;
    this.showElements = false;

    setTimeout(
      ()=>{
        this.showElements = true;
      },10
    );

    console.log(this.mathObject)
  }

  updateABCData(){

    this.abcObject.x = 500;
    this.abcObject.y = 700;

    console.log(this.mathObject)
  }
}

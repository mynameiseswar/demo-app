import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../utils/Student';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss']
})
export class AppButtonComponent {

  buttonClassName: string |undefined;

  // @Input() buttonTitle: string  = 'Click Me' ;

  /* @Input() buttonObject: Student  = {
    name: '',
    age: 0,
    address: '',
    mobile: ''
  }; */

  @Input() buttonObject: Student | undefined;

  // @Input() buttonClassName: string | undefined;

  @Input('buttonClassName') className: string = 'btn-primary';

  @Output() onButtonClick: EventEmitter<any> = new EventEmitter();

  

  
  onClick(){
    console.log("Button Click");
    // this.onButtonClick.emit(this.buttonTitle);

    this.onButtonClick.emit(this.buttonObject);
  }

}

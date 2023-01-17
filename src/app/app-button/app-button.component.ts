import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../utils/Student';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss']
})
export class AppButtonComponent {

  buttonClassName: string |undefined;

  @Input() buttonTitle: string  = 'Click Me' ;

  // @Input() buttonObject: Student | undefined;

  // @Input() buttonClassName: string | undefined;

  @Input('buttonClassName') className: string = 'btn-primary';

  @Output() onButtonClick: EventEmitter<any> = new EventEmitter();

  

  
  onClick(){
    console.log("Button Click");
    this.onButtonClick.emit(this.buttonTitle);

    // this.onButtonClick.emit(this.buttonObject);
  }

  getClassName(name: string): string{
    let className: string;


    /* if(name.toLocaleLowerCase() == 'd'){
      className = 'btn-succes';
    }else if(name.toLocaleLowerCase() == 'p'){
      className = 'btn-danger';
    } */

    switch (name.toLowerCase()){
      case 'd':
        className = 'btn-primary';
        break;
      case 'p':
        className = 'btn-danger';
        break;
      case 'k':
          className = 'btn-warning';
      break;
      default:
        className = 'btn-primary';
      break;
    }

    return className;
  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../utils/Student';
import { ButtonSendObject } from './ButtonSendObject';



@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss']
})
export class AppButtonComponent {

  buttonClassName: string |undefined;

  @Input() buttonTitle: string  = 'Click Me' ;
  @Input() buttonId?: number | undefined;

  // @Input() buttonObject: Student | undefined;

  // @Input() buttonClassName: string | undefined;

  @Input('buttonClassName') className: string = 'btn-primary';

  @Output() onButtonClick: EventEmitter<any> = new EventEmitter();

  

  
  onClick(){

    let sendObject: ButtonSendObject = {
      buttonTitle: this.buttonTitle,
      buttonId: this.buttonId
    }
 
    this.onButtonClick.emit(sendObject);

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

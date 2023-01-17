import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ButtonEmitObject{
  title: string;
  id: number | undefined;
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  // buttonTitle: string = 'Click Me';

  @Input() buttonStyleClass: string = 'd';

  @Input() buttonTitle: string = 'Click Me';

  @Input() buttonId?: number | undefined;

  @Output() onButtonClick: EventEmitter<ButtonEmitObject> = new EventEmitter();

  constructor(){}

  buttonClick(){
    // console.log("Button Clicked");

    let buttonObject: ButtonEmitObject = {
      title: this.buttonTitle,
      id: this.buttonId
    }
    this.onButtonClick.emit(buttonObject);
  }

  getButtonClass(){
    let defaultClassName = 'btn-dark';
    switch(this.buttonStyleClass.toLowerCase()){
      case 'p':
        defaultClassName = 'btn-danger';
        break;
      case 's':
        defaultClassName = 'btn-success';
        break;
      case 'i':
        defaultClassName = 'btn-info';
        break;
      default:
        defaultClassName = 'btn-dark';
        break;
    }
    
    return defaultClassName;
  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss']
})
export class AppButtonComponent {

  buttonClassName: string |undefined;

  @Input() buttonTitle: string | undefined;

  // @Input() buttonClassName: string | undefined;

  @Input('buttonClassName') className: string | undefined;

  @Output() onButtonClick: EventEmitter<string> = new EventEmitter();

  
  onClick(){
    console.log("Button Click");
    this.onButtonClick.emit(this.buttonTitle);
  }

}

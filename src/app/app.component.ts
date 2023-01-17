import { Component } from '@angular/core';
import { ButtonEmitObject } from './shared/button/button.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(){}

    buttonClick(event: ButtonEmitObject){
      console.log(event);

      switch(event.id){
        case 1001:
          console.log('Do Save action 1')
          break;
        case 1002:
          console.log('Do Save action 2')
          break;
        default:
          console.log(`Do ${event.title} action`)
          break;
      }

      /* switch(event.toLowerCase()){
        case 'save':
            console.log('Do Save action1')
          break;
        case 'save':
       console.log('Do Save action1')
        break;
        case 'delete':
          console.log('Do Delete action')
          break;
      }*/
    } 
}
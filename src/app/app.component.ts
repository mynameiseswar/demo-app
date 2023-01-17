import { Component } from '@angular/core';
import { ButtonEmitObject } from './shared/button/button.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  studetnList: Array<any> = [
    {
      rollId: 1001,
      name: 'Raju',
      age: 12,
      location: 'Hyd', 
      class: 'IV',
      section: "B",
      mobile: '+91-987654321' 
    },
    {
      rollId: 1002,
      name: 'Venkat',
      age: 11,
      location: 'Vizag', 
      class: 'V',
      section: "A",
      mobile: '+91-987624321' 
    },
    {
      rollId: 1003,
      name: 'Siva',
      age: 13,
      location: 'Del', 
      class: 'VI',
      section: "C",
      mobile: '+91-987621321' 
    }
  ]

  /*
    Hyd - text-danger
    Vizag - text-success
    Del - text-Info
   */

  selectedStudentInformation: any = {
    rollId: 1001,
    name: 'Raju',
    age: 12,
    location: 'Hyd', // "Vizag" , "DEL" 
    class: 'IV',
    section: "B",
    mobile: '+91-987654321' // optional
  }
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
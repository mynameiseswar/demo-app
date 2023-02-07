import { Component } from '@angular/core';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(
    private appService: AppService
  ) {
    this.table();
  }
  /*  onNavigateToPreviousPage() {
     window.history.back();
   } */

  onSaveUserInformation() {
    let userInfo = {
      name: "raju",
      address: 'HYD'
    }
    this.appService.setItem('userInfo', JSON.stringify(userInfo));
  }


  onGetUserInformation() {
    try {
      let userInfo = JSON.parse(this.appService.getItem('userInfo') || '');
      console.log(userInfo.name);
    } catch (err) {
      console.log(err);
    }
  }

  onDeleteUserInformation() {
    // sessionStorage.removeItem('userInfo');
    //window.localStorage.removeItem('userInfo');
    this.appService.removeItem('userInfo');
  }



  table() {
    let x = 10;
    /* 
        for (let i = 1; i <= 10000; i++) {
          console.log(`${i} X ${x} = ${i * x}`)
        } */

    /* setInterval(
      () => {
        for (let i = 1; i <= 10000; i++) {
          console.log(`${i} X ${x} = ${i * x}`)
        }
      }, 1000
    ); */


  }
}
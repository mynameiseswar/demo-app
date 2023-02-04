import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonEmitObject } from './shared/button/button.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  seletedpage: string = 'dashboard';

  menuList: any = [
    {
      title: 'Dashboard',
      url: 'dashboard'
    },
    {
      title: 'Product List',
      url: 'product-list'
    },
    {
      title: 'Users List',
      url: 'users-list'
    },
    {
      title: 'Students List',
      url: 'students-list'
    },
    {
      title: 'Settings',
      url: 'settings'
    }
  ];

  constructor(
    private router: Router
  ) { }

  onMenuClick(selectedMenu: any) {

    // console.log(selectedMenu);

    this.router.navigate([`/${selectedMenu.url}`])

    // this.seletedpage = selectedMenu.toLowerCase();

    /* if(selectedMenu.toLocaleLowerCase() === 'dashboard'){
      this.router.navigate(['/dashboard']);
    }else if(selectedMenu.toLocaleLowerCase() === 'product list'){
      this.router.navigate(['/product-list']);
    } */



    /* switch(selectedMenu.toLocaleLowerCase()){
      case ('dashboard'):
        this.router.navigate(['/dashboard']);
        break;
      case ('product list'):
        this.router.navigate(['/product-list']);
        break;
    } */

  }
}
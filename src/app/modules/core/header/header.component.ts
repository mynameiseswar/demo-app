import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private router: Router
  ) { }

  userLogout() {
    window.localStorage.removeItem('token');
    window.sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}

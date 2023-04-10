import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { AppService } from 'src/app/app.service';


export interface LoginResponse {
  token: string;
}
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {

  userLogin = this.fb.group({
    username: ['mor_2314', Validators.required],
    password: ['83r5^_', Validators.required]
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private appService: AppService
  ) {

  }

  loginSubmit() {
    console.log('user login');
    console.log(this.userLogin)
    if (this.userLogin.valid) {
      this.authenticationService.userLogin(this.userLogin.value).subscribe(
        (data: any) => {
          if (data && data.hasOwnProperty('token')) {
            // We have store this tokent and vlidate before navigate to any page
            // Local storage  || session storage 

            window.localStorage.setItem('token', data.token)
            window.sessionStorage.setItem('token', data.token);
            this.appService.setToken(data.token)
            this.router.navigate(['/app/dashboard'])
          }
        }
      );

    }
  }
}

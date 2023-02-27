import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

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
    private authenticationService: AuthenticationService
  ) {

  }

  loginSubmit() {
    console.log('user login');
    console.log(this.userLogin)
    if (this.userLogin.valid) {
      this.authenticationService.userLogin(this.userLogin.value).subscribe(
        (data) => {
          if (data && data.hasOwnProperty('token')) {
            this.router.navigate(['/app/dashboard'])
          }
        }
      );

    }
  }
}

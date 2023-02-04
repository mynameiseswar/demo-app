import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  //   formGroupRef = new FormGroup({
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  //     gender: new FormControl(''),
  //     userType: new FormControl(''),
  //     address: new FormGroup({
  //       address1: new FormControl(''),
  //       address2: new FormControl(''),
  //       pincode: new FormControl('', [Validators.required, Validators.minLength(6)]),
  //     })
  //   })


  formGroupRef = this.fb.group({
    email: ['aba@abc.com', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    gender: [''],
    userType: [''],
    address: this.fb.group({
      address1: [''],
      address2: [''],
      pincode: ['', [Validators.required, Validators.minLength(6)]]
    })
  })


  constructor(private fb: FormBuilder) {
    console.log(this.formGroupRef);
  }


  onUserLogin() {
    console.log(this.formGroupRef);
  }
}

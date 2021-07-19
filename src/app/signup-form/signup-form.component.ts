import { SignUpFormValidators } from './signup-form.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form;
  // NOTE: Alternative approach to FormBuilder used in the constructor.
  // form = new FormGroup({
  //   // nested FormGroup
  //   account: new FormGroup({
  //     username: new FormControl('', [
  //       // sync validators
  //       Validators.required,
  //       Validators.minLength(5),
  //       SignUpFormValidators.usernameNoSpace
  //     ], [
  //       // async validators
  //       SignUpFormValidators.usernameDuplicate
  //     ]),
  //     password: new FormControl('', [
  //       Validators.required,
  //       Validators.minLength(10)
  //     ])
  //   })
  // });

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      account: fb.group({
        username: ["", [
          // sync validators
          Validators.required,
          Validators.minLength(5),
          SignUpFormValidators.usernameNoSpace
        ], [
            // async validators
            SignUpFormValidators.usernameDuplicate
          ]],
        password: ["", [
          // sync validators
          Validators.required,
          Validators.minLength(10)
        ], [
            // async validators
          ]]
      })
    });
  }

  get username() {
    return this.form.get('account.username');
  }

  get password() {
    return this.form.get('account.password');
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  signupForm = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    uname: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('')
  })
  constructor(
    private _user: UsersService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this._user.createUser(this.signupForm.value)
    console.warn(this.signupForm.value)
  }
  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  //
  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UsersService} from "../../users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    uname: new FormControl(''),
    password: new FormControl('')
  })
  constructor(
    private _user: UsersService
  ) { }

  ngOnInit(): void {
    console.log('starting component')
  }

  onLogin() {
    this._user.logUserIn(this.loginForm.value)
  }
}

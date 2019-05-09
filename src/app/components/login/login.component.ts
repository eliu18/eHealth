import { Component, OnInit } from '@angular/core';
import {Login} from '../../interfaces/login';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm:Login = {
    user: "",
    password: ""
  }
  constructor(private ls: LoginService) { }

  ngOnInit() {
  }

  login(){
    this.ls.login(this.loginForm)
  }
}

import { Component, OnInit } from '@angular/core';
import { Login } from '../../interfaces/login';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: Login = {
    user: '',
    password: ''
  };
  constructor(private lS: LoginService) { }

  ngOnInit() {
  }

  login() {
    this.lS.login(this.loginForm).subscribe(data => {
      console.log(data);
    });
  }
}

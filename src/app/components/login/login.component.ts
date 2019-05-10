import { Component, OnInit } from '@angular/core';
import { Login } from '../../interfaces/login';
import { LoginService } from 'src/app/services/login.service';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private lS: LoginService, private fb: FormBuilder) { }

  loginForm = this.fb.group({
    user: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
  });

  ngOnInit() {
  }

  onSubmit() {
    console.log('Form Submitted: ', this.loginForm);
    this.lS.login(this.loginForm).subscribe(data => {
      console.log(data);
      console.log('Form Submitted: ', this.loginForm.value);
      this.loginForm.patchValue({
        user: '',
        password: ''
      });
    });
  }
}

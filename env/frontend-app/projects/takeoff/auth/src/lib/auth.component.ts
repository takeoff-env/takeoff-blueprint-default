import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'lib-takeoff-login',
  template: `
  <div class="card">
    <div class="card-body">
      <h2 class="card-header">Login Form</h2>
      <div class="card-text">
        <form [formGroup]="loginFormGroup" (submit)="onSubmit()">
          <div class="form-item">
            <label for="username">Username</label>
            <input type="text" formControlName="username" id="username" />
          </div>
          <div class="form-item">
            <label for="password">Password</label>
            <input type="text" formControlName="password" id="password" />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>
  `,
  styles: [],
})
export class AuthComponent implements OnInit {
  loginFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.loginFormGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log('Submit called');
    const { username, password } = this.loginFormGroup.value;
    this.authService.login({ username, password });
  }
}

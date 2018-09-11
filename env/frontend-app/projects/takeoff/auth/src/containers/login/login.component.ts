import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-takeoff-login',
  styleUrls: ['login.component.scss'],
  template: `
  <lib-takeoff-login-form [formGroup]="loginFormGroup" [userType]="userType" (submit)="onSubmit()"></lib-takeoff-login-form>
  `,
})
export class TakeoffLoginComponent implements OnInit {
  loginFormGroup: FormGroup;

  userType: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.userType = this.route.snapshot.data['userType'];
    this.loginFormGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public onSubmit() {
    const { username, password } = this.loginFormGroup.value;
    this.authService.login({ username, password }, this.userType);
  }
}

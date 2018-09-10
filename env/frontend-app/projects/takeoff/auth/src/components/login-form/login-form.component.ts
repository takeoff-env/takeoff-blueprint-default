import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-takeoff-login-form',
  templateUrl: './login-form.component.html',
  styles: [],
})
export class TakeoffLoginFormComponent {
  @Input()
  formGroup: FormGroup;

  @Input()
  userType: string;

  @Output()
  submit = new EventEmitter();
}

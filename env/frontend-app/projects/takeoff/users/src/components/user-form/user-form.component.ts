import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/users';

@Component({
  selector: 'lib-takeoff-user-form',
  styleUrls: ['user-form.component.scss'],
  template: `
    <form [formGroup]="formGroup">
    <input type="hidden" formControlName="__v" id="__v" />
      <input type="hidden" formControlName="_id" id="_id" />

      <div class="form-group">
        <label for="username">Username</label>
        <input type="text"
          formControlName="username"
          id="username" />
        <small id="emailHelp"
          class="form-text text-muted">Enter a username</small>
      </div>

      <div class="form-group">
        <label for="displayName">Display Name</label>
        <input type="text"
          formControlName="displayName"
          id="displayName" />
        <small id="displayNameHelp"
        class="form-text text-muted">Display Name</small>
      </div>

      <div class="form-group">
      <label for="role">Role</label>
        <select
          formControlName="role"
          id="role">
            <option value="admin" selected="role.value === 'admin">Admin</option>
            <option value="user" selected="role.value === 'user">User</option>
          </select>
        <small id="emailHelp"
          class="form-text text-muted">Enter a username</small>
      </div>
    </form>
  `,
})
export class TakeoffUserFormComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private router: ActivatedRoute) {
    console.log(router);
    this.formGroup = this.fb.group({
      _id: [''],
      __v: [''],
      username: [''],
      displayName: [''],
      role: [''],
    });
  }

  ngOnInit() {
    const user: User = this.router.snapshot.data['user'];
    this.formGroup.setValue(user);
  }
}

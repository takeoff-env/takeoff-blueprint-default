import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-takeoff-user-form',
  styleUrls: ['user-form.component.scss'],
  template: `
    <form [formGroup]="formGroup">
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
export class TakeoffUserFormComponent {
  @Input()
  formGroup: FormGroup;
}

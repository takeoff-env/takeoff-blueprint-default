import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-takeoff-user-form',
  styleUrls: ['user-form.component.scss'],
  template: `
    Edit User
    <form [formGroup]="formGroup">

    </form>
  `,
})
export class TakeoffUserFormComponent {

  @Input()
  formGroup: FormGroup;

  constructor() {}
}

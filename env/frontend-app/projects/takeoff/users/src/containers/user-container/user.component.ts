import { Component, OnInit } from '@angular/core';
import { TakeoffUsersService } from '../../services/users.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/users';

@Component({
  selector: 'lib-takeoff-user',
  template: `
    <div class="container">
      <lib-takeoff-user-form [formGroup]="formGroup"></lib-takeoff-user-form>
    </div>
  `,
})
export class TakeoffUserContainerComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private router: ActivatedRoute) {
    this.formGroup = this.fb.group({
      username: [''],
      displayName: [''],
      role: [''],
    });
  }

  ngOnInit() {
    const { username, displayName, role }: User = this.router.snapshot.data[
      'user'
    ];
    this.formGroup.setValue({ username, displayName, role });
  }
}

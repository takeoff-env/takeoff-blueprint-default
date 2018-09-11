import { Component, OnInit } from '@angular/core';
import { TakeoffUsersService } from '../../services/users.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/users';

@Component({
  selector: 'lib-takeoff-user',
  template: `
    <div class="container">
      <lib-takeoff-user-form [formGroup]="formGroup" (submit)="onSubmit()"></lib-takeoff-user-form>
    </div>
  `,
})
export class TakeoffUserContainerComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private router: ActivatedRoute, private userService: TakeoffUsersService) {
    this.formGroup = this.fb.group({
      username: [''],
      displayName: [''],
      role: [''],
    });
  }

  ngOnInit() {
    if (this.router.snapshot.data['user']) {
      const { username, displayName, role }: User = this.router.snapshot.data[
        'user'
      ];
      this.formGroup.setValue({ username, displayName, role });
    }
  }

  onSubmit() {}
}

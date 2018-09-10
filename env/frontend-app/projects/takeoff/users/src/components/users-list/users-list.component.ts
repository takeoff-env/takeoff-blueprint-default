import { Component, Input } from '@angular/core';
import { User } from '../../models/users';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-takeoff-users-list',
  styleUrls: ['users-list.component.scss'],
  template: `
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Display Name</th>
        <th scope="col">User Name</th>
        <th scope="col">Role</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let user of users; let i = index;">
        <th scope="row">{{i + 1}}</th>
        <td><a [routerLink]="['/users', user._id]">{{user.displayName}}</a></td>
        <td>{{user.username}}</td>
        <td>{{user.role}}</td>
      </tr>
    </tbody>
  </table>
  `,
})
export class TakeoffUsersListComponent {
  constructor(router: ActivatedRoute) {
    this.users = router.snapshot.data['users'];
  }

  @Input()
  users: User[];
}

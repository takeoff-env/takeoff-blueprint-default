import { Component, OnInit } from '@angular/core';
import { TakeoffUsersService } from '../../services/users.service';

@Component({
  selector: 'lib-takeoff-users',
  template: `
    <div class="container">
      <h2>Users</h2>
      <router-outlet name="users"></router-outlet>
    </div>
  `,
})
export class TakeoffUsersContainerComponent {}

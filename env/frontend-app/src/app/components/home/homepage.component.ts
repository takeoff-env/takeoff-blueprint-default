import { Component } from '@angular/core';

@Component({
  selector: 'takeoff-homepage',
  styleUrls: ['homepage.component.scss'],
  template: `
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h3 class="card-header">Welcome to Takeoff</h3>
        <div class="card-text">
          Takeoff: Online!
        </div>
        <div class="card-text">
          <div class="btn-group" role="group" aria-label="Basic example">
            <a class="btn btn-primary" [routerLink]="['/login/user']">Login As User</a>
            <a class="btn btn-primary" [routerLink]="['/login/admin']">Login As Admin</a>
            <a class="btn btn-primary" [routerLink]="['/dashboard']">Go To Dashboard</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
})
export class TakeoffHomepageComponent {
  constructor() {}
}

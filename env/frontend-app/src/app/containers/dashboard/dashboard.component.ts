import { Component } from '@angular/core';

@Component({
  selector: 'takeoff-dashboard',
  styleUrls: ['dashboard.component.scss'],
  template: `
  <div class="container">
    <h1>Dashboard</h1>
    <router-outlet name="dashboard"></router-outlet>
  </div>`,
})
export class TakeoffDashboardComponent {
  constructor() {}
}

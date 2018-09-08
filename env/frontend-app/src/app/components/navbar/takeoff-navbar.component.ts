import { Component, Input } from '@angular/core';

@Component({
  selector: 'takeoff-navbar',
  styleUrls: ['takeoff-navbar.component.scss'],
  templateUrl: './takeoff-navbar.component.html'
})
export class TakeoffNavbarComponent {
  constructor() {}

  @Input()
  isAuthenticated: boolean;
}

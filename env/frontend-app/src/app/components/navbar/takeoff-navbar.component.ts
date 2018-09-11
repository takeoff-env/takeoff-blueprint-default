import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'takeoff-navbar',
  styleUrls: ['takeoff-navbar.component.scss'],
  templateUrl: './takeoff-navbar.component.html',
})
export class TakeoffNavbarComponent {
  constructor() {}

  @Input()
  isAuthenticated: boolean;

  @Input()
  isAdmin: boolean;

  @Output()
  authUser = new EventEmitter();
}

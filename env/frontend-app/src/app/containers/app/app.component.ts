import { Component, OnInit } from '@angular/core';
import { AuthService } from 'projects/takeoff/auth/public_api';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'takeoff-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend-app';

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {}

  authUser(value: boolean) {
    if (value === false) {
      this.router.navigate(['login/user']);
    } else {
      this.authService.logout();
      this.router.navigate(['']);
    }
  }
}

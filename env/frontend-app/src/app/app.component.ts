import { Component, OnInit } from '@angular/core';
import { AuthService } from 'projects/takeoff/auth/src/public_api';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'takeoff-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend-app';

  gc$: Subject<boolean> = new Subject<boolean>();

  isAuthenticated = this.authService.isAuthenticated.pipe(takeUntil(this.gc$));

  constructor(private authService: AuthService) {}

  ngOnInit() {}
}

import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.auth.isAuthenticated.subscribe((isAuthenticated: boolean) => {
      if (!isAuthenticated) {
        this.router.navigate(['login/user']);
      }
    });
    return this.auth.isAuthenticated;
  }
}

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../models/users';

@Injectable()
export class UserResolve implements Resolve<User> {
  constructor() {}

  resolve(route: ActivatedRouteSnapshot) {
    return {} as User;
  }
}

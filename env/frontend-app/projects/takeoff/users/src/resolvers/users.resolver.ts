import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../models/users';
import { TakeoffUsersService } from '../services/users.service';

@Injectable()
export class UsersResolve implements Resolve<User[]> {
  constructor(private usersService: TakeoffUsersService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.usersService.getUsers();
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { AuthService } from '../../../auth/public_api';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class TakeoffUsersService {
  static apiBasePath = '//localhost/api';

  private users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor(private http: HttpClient, private authService: AuthService) {}

  get users() {
    return this.users$.asObservable();
  }

  getUsers(): Observable<User[]> {
    const headers = {
      authorization: `Bearer ${this.authService.tokenString}`,
    };

    return this.http
      .get<User[]>(`${TakeoffUsersService.apiBasePath}/users`, { headers })
      .pipe(take(1));
  }

  getUser(id: string): Observable<User> {
    const headers = {
      authorization: `Bearer ${this.authService.tokenString}`,
    };

    return this.http.get<User>(`${TakeoffUsersService.apiBasePath}/users/${id}`, {
      headers,
    });
  }
}

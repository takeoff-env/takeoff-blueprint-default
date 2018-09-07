import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import * as moment from 'moment';
import jwtDecode from 'jwt-decode';
import { tap, take, pluck } from 'rxjs/operators';
import { ReplaySubject, Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  static apiBasePath = '//localhost/api';

  private isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<
    boolean
  >(false);

  private tokenValue: Subject<TokenValues> = new ReplaySubject<TokenValues>(1);

  constructor(private http: HttpClient) {}

  public get token(): Observable<TokenValues> {
    return this.tokenValue.asObservable();
  }

  public get username(): Observable<string> {
    return this.tokenValue.pipe(pluck('username'));
  }

  public get scope(): Observable<string> {
    return this.tokenValue.pipe(pluck('scope'));
  }

  public login(userLogin: UserLogin, userType = 'user') {
    const url = `${AuthService.apiBasePath}/auth/${userType}`;
    return this.http
      .post(url, userLogin)
      .pipe(take(1))
      .subscribe((response: HttpResponse<LoginResponse>) => {
        this.setSession(response);
      });
  }

  private setSession(response: HttpResponse<LoginResponse>) {
    const parsedToken: TokenValues = jwtDecode(
      (response as any).token,
    ) as TokenValues;

    this.tokenValue.next(parsedToken);
    this.isAuthenticated.next(true);
  }
}

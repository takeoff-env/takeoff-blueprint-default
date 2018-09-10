import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import * as moment from 'moment';
import jwtDecode from 'jwt-decode';
import { tap, take, pluck } from 'rxjs/operators';
import { ReplaySubject, Subject, Observable, BehaviorSubject } from 'rxjs';
import { TokenValues, UserLogin, LoginResponse } from '../types/auth.types';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  static apiBasePath = '//localhost/api';

  private isAuthenticatedValue: BehaviorSubject<boolean> = new BehaviorSubject<
    boolean
  >(false);

  private isAdminValue: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false,
  );

  private tokenValue: Subject<string> = new ReplaySubject<string>(1);

  private userValue: Subject<TokenValues> = new ReplaySubject<TokenValues>(1);

  public tokenString: string;

  constructor(
    private http: HttpClient,
    private jwt: JwtHelperService,
    public router: Router,
  ) {
    const token = this.jwt.tokenGetter();
    if (token && !this.jwt.isTokenExpired(token)) {
      const result: TokenValues = this.jwt.decodeToken(token);
      this.tokenString = token;
      this.tokenValue.next(token);
      this.userValue.next(result);
      this.isAuthenticatedValue.next(true);
      this.isAdminValue.next(result.scope === 'admin');
    }
  }

  static getSessionToken(): string {
    return sessionStorage.getItem('takeoff-jwt-token');
  }

  public get isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedValue.asObservable();
  }

  public get isAdmin(): Observable<boolean> {
    return this.isAdminValue.asObservable();
  }

  public get token(): Observable<string> {
    return this.tokenValue.asObservable();
  }

  public get user(): Observable<TokenValues> {
    return this.userValue.asObservable();
  }

  public get username(): Observable<string> {
    return this.tokenValue.pipe(pluck('username'));
  }

  public get scope(): Observable<string> {
    return this.tokenValue.pipe(pluck('scope'));
  }

  public login(userLogin: UserLogin, userType = 'user') {
    return this.http
      .post(`${AuthService.apiBasePath}/auth/${userType}`, userLogin)
      .pipe(take(1))
      .subscribe((response: HttpResponse<LoginResponse>) => {
        this.setSession(response);
        this.router.navigate(['dashboard']);
      });
  }

  public logout() {
    this.isAuthenticatedValue.next(false);
    this.isAdminValue.next(false);
    this.tokenValue.next(undefined);
    sessionStorage.removeItem('takeoff-jwt-token');
  }

  private setSession(response: HttpResponse<LoginResponse>) {
    const { token } = response as any;
    if (!this.jwt.isTokenExpired(token)) {
      sessionStorage.setItem('takeoff-jwt-token', token);
      const result: TokenValues = this.jwt.decodeToken(token);
      this.tokenString = token;
      this.tokenValue.next(token);
      this.userValue.next(result);
      this.isAuthenticatedValue.next(true);
      this.isAdminValue.next(result.scope === 'admin');
    }
  }
}

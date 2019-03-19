import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { ApiService } from "./api.service";
import { ConfigService } from "./config.service";
import { UserService } from "./user.service";

@Injectable()
export class AuthService {
  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private config: ConfigService
  ) {}

  public login(user: { username: any; password: any }): Observable<any> {
    const loginHeaders = new HttpHeaders({
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    });
    const body = `username=${user.username}&password=${user.password}`;
    return this.apiService.post(this.config.login_url, body, loginHeaders).pipe(
      map(() => {
        console.log("Login success");
        this.userService.getMyInfo().subscribe();
      })
    );
  }

  public signup(user: any): Observable<any> {
    const signupHeaders = new HttpHeaders({
      Accept: "application/json",
      "Content-Type": "application/json"
    });
    return this.apiService
      .post(this.config.signup_url, JSON.stringify(user), signupHeaders)
      .pipe(
        map(() => {
          console.log("Sign up success");
        })
      );
  }

  public logout(): Observable<any> {
    return this.apiService.post(this.config.logout_url, {}).pipe(
      map(() => {
        this.userService.currentUser = null;
      })
    );
  }

  public changePassword(passwordChanger: any): Observable<any> {
    return this.apiService.post(
      this.config.change_password_url,
      passwordChanger
    );
  }
}

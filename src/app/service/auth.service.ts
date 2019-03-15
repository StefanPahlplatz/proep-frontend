import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
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

  public login(user) {
    const loginHeaders = new HttpHeaders({
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    });
    const body = `username=${user.username}&password=${user.password}`;
    return this.apiService
      .post(this.config.login_url, body, loginHeaders)
      .map(() => {
        console.log("Login success");
        this.userService.getMyInfo().subscribe();
      });
  }

  public signup(user) {
    const signupHeaders = new HttpHeaders({
      Accept: "application/json",
      "Content-Type": "application/json"
    });
    return this.apiService
      .post(this.config.signup_url, JSON.stringify(user), signupHeaders)
      .map(() => {
        console.log("Sign up success");
      });
  }

  public logout() {
    return this.apiService.post(this.config.logout_url, {}).map(() => {
      this.userService.currentUser = null;
    });
  }

  public changePassowrd(passwordChanger) {
    return this.apiService.post(
      this.config.change_password_url,
      passwordChanger
    );
  }
}

import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { UserService } from "../service";

@Injectable()
export class GuestGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  public canActivate(): boolean {
    if (this.userService.currentUser) {
      this.router.navigate(["/"]);
      return false;
    } else {
      return true;
    }
  }
}

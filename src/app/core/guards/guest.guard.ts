import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

import { UserService } from "../services/user.service";

@Injectable({
  providedIn: "root"
})
export class GuestGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.userService.currentUser) {
      this.router.navigate(["/"]);
      return false;
    } else {
      return true;
    }
  }
}

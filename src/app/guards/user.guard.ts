import { Injectable } from '@angular/core'
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router'

import { AuthService } from '../services/auth.service'

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const userAuthorities = this.authService.getUserAuthorities()
    let isAuthorized = false

    if (userAuthorities) {
      isAuthorized = userAuthorities.some(a => a.authority === 'ROLE_USER')
    }

    if (!isAuthorized && this.authService.isAuthenticated()) {
      this.router.navigate(['error/403'])
    }

    return isAuthorized
  }
}

import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router'

import { UserService } from '../../../core/services/user.service'
import { AuthService } from '../../../core/services/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() canSearch: boolean
  @Input() hasBorder: boolean

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  isCurrentRoute(route: string): boolean {
    return this.router.url === route
  }

  hasSignedIn(): boolean {
    return this.userService.currentUser
  }

  logout() {
    this.authService.logout().subscribe(res => {
      this.router.navigate(['/login'])
    })
  }
}

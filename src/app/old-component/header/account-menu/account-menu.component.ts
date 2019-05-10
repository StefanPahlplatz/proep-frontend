import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { AuthService } from '../../../core/services/auth.service'
import { UserService } from '../../../core/services/user.service'

@Component({
  selector: 'app-account-menu',
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.scss'],
})
export class AccountMenuComponent implements OnInit {
  // TODO define user interface
  user: any

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.user = this.userService.currentUser
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login'])
    })
  }
}

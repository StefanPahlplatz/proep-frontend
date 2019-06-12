import { HttpErrorResponse } from '@angular/common/http'
import { catchError } from 'rxjs/operators'
import { UserDto } from './../../models/dtos/user-dto'
import { UserService } from './../../services/user.service'
import { AuthService } from '../../services/auth.service'
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { of } from 'rxjs'

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss'],
})
export class UserProfilePageComponent implements OnInit {
  user: UserDto = {
    id: null,
    firstname: null,
    lastname: null,
    address: null,
    city: null,
    email: null,
    rating: null,
    telephone: null,
    username: null,
    timestamp: null,
    reservations: [],
    authorities: [],
  }

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.getUser()
  }

  private getUser() {
    this.authService
      .getCurrentUser()
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 403) {
            this.router.navigate(['/login'])
          }
          return of()
        })
      )
      .subscribe((user: UserDto) => {
        this.user = user
      })
  }
}

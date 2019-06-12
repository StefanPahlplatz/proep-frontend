import { Component, OnInit } from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'
import { catchError } from 'rxjs/operators'
import { of } from 'rxjs'

import { AuthService } from '../../services/auth.service'
import { UserDto } from './../../models/dtos/user-dto'
import { VehicleService } from './../../services/vehicle.service'
import { IVehicle } from '../../models/interfaces/vehicle'

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
  ownerVehicles: IVehicle[] = []

  constructor(
    private authService: AuthService,
    private router: Router,
    private vehicleService: VehicleService
  ) {}

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

        this.getOwnerVehicles(user)
      })
  }

  private getOwnerVehicles(user: UserDto) {
    this.vehicleService
      .getVehicleByOwner(user)
      .subscribe((data: IVehicle[]) => {
        this.ownerVehicles = data
      })
  }
}

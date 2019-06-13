import { ActivatedRoute } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http'
import { catchError, finalize } from 'rxjs/operators'
import { of } from 'rxjs'

import { AuthService } from '../../services/auth.service'
import { IDisplayMessage } from '../../models/interfaces/display-message'
import { VehicleDto } from '../../models/dtos/vehicle-dto'
import { ReservationRequestDto } from './../../models/dtos/reservation-dto'
import { ReservationService } from './../../services/reservation.service'
import { UserDto } from '../../models/dtos/user-dto'
import { VehicleService } from '../../services/vehicle.service'

@Component({
  selector: 'app-vehicle-detail-page',
  templateUrl: './vehicle-detail-page.component.html',
  styleUrls: ['./vehicle-detail-page.component.scss'],
})
export class VehicleDetailPageComponent implements OnInit {
  notification: IDisplayMessage = null
  isLoading: boolean
  isLoggedIn: boolean
  user: UserDto
  vehicleId: number
  vehicle: VehicleDto = {
    id: null,
    timestamp: null,
    registration: null,
    colour: null,
    mileage: null,
    model: null,
    make: null,
    type: null,
    price: null,
    longitude: null,
    latitude: null,
    timesRented: null,
    user: {
      address: null,
      authorities: null,
      city: null,
      email: null,
      firstname: null,
      id: null,
      lastname: null,
      rating: null,
      reservations: null,
      telephone: null,
      timestamp: null,
      username: null,
    },
    availables: null,
    reservations: null,
    images: [],
    rented: null,
  }
  newReservation: ReservationRequestDto = {
    endDate: null,
    price: null,
    startDate: null,
    userId: null,
    vehicleId: null,
  }

  constructor(
    private vehicleService: VehicleService,
    private reservationService: ReservationService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.vehicleId = +this.route.snapshot.paramMap.get('id')
    this.isLoggedIn = this.authService.isAuthenticated()

    this.vehicleService.getVehicleWithId(this.vehicleId).subscribe(data => {
      this.vehicle = data
      this.newReservation.price = this.vehicle.price
      this.newReservation.vehicleId = this.vehicle.id
    })
    this.authService.getCurrentUser().subscribe((user: UserDto) => {
      this.user = user
      this.newReservation.userId = this.user.id
    })
  }

  onClickSubmit() {
    this.isLoading = true
    this.reservationService
      .reserveVehicle(this.newReservation)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.log(error)
          this.notification = {
            msgType: 'error',
            msgBody: error.error,
          }
          return of()
        }),
        finalize(() => (this.isLoading = false))
      )
      .subscribe(() => {
        this.notification = null
      })
  }
}

import { Component, OnInit } from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'
import { catchError, finalize } from 'rxjs/operators'
import { throwError } from 'rxjs'

import { AuthService } from '../../services/auth.service'
import { VehicleCreationDto } from './../../models/dtos/vehicle-dto'
import { VehicleService } from '../../services/vehicle.service'

@Component({
  selector: 'app-vehicle-creation',
  templateUrl: './vehicle-creation.component.html',
  styleUrls: ['./vehicle-creation.component.css'],
})
export class VehicleCreationComponent implements OnInit {
  submitted = false
  newVehicle: VehicleCreationDto = {
    miledge: null,
    price: null,
    registration: null,
    userId: null,
  }

  constructor(
    private vehicleService: VehicleService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService
      .getCurrentUser()
      .subscribe(user => (this.newVehicle.userId = user.id))
  }

  onSubmit() {
    this.submitted = true
    this.vehicleService
      .makeVehicle(this.newVehicle)
      .pipe(
        catchError(this.handleError),
        finalize(() => (this.submitted = false))
      )
      .subscribe(() => {
        this.router.navigate(['/profile'])
      })
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message)
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      )
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.')
  }
}

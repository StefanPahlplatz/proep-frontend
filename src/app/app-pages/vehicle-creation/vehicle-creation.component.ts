import { Component, OnInit } from '@angular/core'
import { IVehicle } from 'app/models/interfaces/vehicle'
import { VehicleService } from 'app/services/vehicle.service'
import { ActivatedRoute, Router } from '@angular/router'
import { AuthService } from 'app/services/auth.service'
import { catchError } from 'rxjs/operators'
import { HttpErrorResponse } from '@angular/common/http'
import { throwError } from 'rxjs'

@Component({
  selector: 'app-vehicle-creation',
  templateUrl: './vehicle-creation.component.html',
  styleUrls: ['./vehicle-creation.component.css'],
})
export class VehicleCreationComponent implements OnInit {
  currentUserId: number = null
  vehicle: IVehicle = {
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
      id: null,
      name: null,
      city: null,
    },
    availables: null,
    reservations: null,
    images: null,
    rented: null,
  }

  constructor(
    private vehicleService: VehicleService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService
      .getCurrentUser()
      .subscribe(user => (this.currentUserId = user.id))
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

  onSubmit() {
    this.vehicleService
      .makeVehicle(this.currentUserId, this.vehicle.registration)
      .pipe(catchError(this.handleError))
      .subscribe(() => {
        this.router.navigate(['/profile'])
      })
  }
}

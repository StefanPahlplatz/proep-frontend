import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { AuthService } from '../../services/auth.service'
import { UserDto } from '../../models/dtos/user-dto'
import { ActivatedRoute, Params } from '@angular/router'
import { IVehicle } from '../../models/interfaces/vehicle'
import { VehicleService } from '../../services/vehicle.service'

@Component({
  selector: 'app-vehicle-detail-page',
  templateUrl: './vehicle-detail-page.component.html',
  styleUrls: ['./vehicle-detail-page.component.scss'],
})
export class VehicleDetailPageComponent implements OnInit {
  location: string = 'Amsterdam'
  formdata: FormGroup
  isLoading: boolean
  isLoggedIn: boolean
  user: any
  vehicleId: string
  urlstring: string = window.location.href
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
      city: null,
    },
    availables: null,
    reservations: null,
    images: [],
    rented: null,
  }

  constructor(
    private vehicleService: VehicleService,
    private http: HttpClient,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => {
      console.log(user.id)
    })
    console.log(this.route.snapshot.paramMap.get(' id'))
    this.vehicleService
      .getVehicleWithId(getLastNumberOfString(this.urlstring))
      .subscribe(data => {
        this.vehicle = data
        console.log(this.vehicle)
      })
    this.formdata = new FormGroup({
      fromDateInput: new FormControl(''),
      tillDateInput: new FormControl(''),
    })
    this.isLoggedIn = this.authService.isAuthenticated()
    this.authService.getCurrentUser().subscribe((user: UserDto) => {
      this.user = user
      console.log({ user })
    })
    this.route.queryParams.subscribe((queryparam: Params) => {
      console.log(queryparam)
    })
    this.route.params.subscribe(params => {
      this.vehicleId = params.id
    })
  }

  onClickSubmit(data) {
    console.log(data)
    if (data.fromDateInput && data.tillDateInput) {
      this.http
        .post<{}>(`${environment.airRnD.baseUrl}/reservation/`, {
          userId: this.user.id,
          vehicleId: this.vehicleId,
          startDate: data.fromDateInput,
          endDate: data.tillDateInput,
        })
        .subscribe(re => console.log(re))

      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 1400)
    }
  }
}

// ghetto
function getLastNumberOfString(str) {
  const allNumbers = str
    .replace(/[^0-9]/g, ' ')
    .trim()
    .split(/\s+/)
  return parseInt(allNumbers[allNumbers.length - 1], 10)
}

import { Component, OnInit } from '@angular/core'
import { VehicleViewModel } from 'app/models/view-models/vehicle-view-model'
import { VehicleService } from 'app/services/vehicle.service'
import { IVehicle } from 'app/models/interfaces/vehicle'
import { Route, Router, ActivatedRoute } from '@angular/router'
import { AuthService } from 'app/services/auth.service'

@Component({
  selector: 'app-vehicle-detail-page',
  templateUrl: './vehicle-detail-page.component.html',
  styleUrls: ['./vehicle-detail-page.component.scss'],
})
export class VehicleDetailPageComponent implements OnInit {
  urlstring: string = window.location.href
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
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService
      .getCurrentUser()
      .subscribe(user => (this.currentUserId = user.id))

    console.log(this.route.snapshot.paramMap.get(' id'))
    this.vehicleService
      .getVehicleWithId(getLastNumberOfString(this.urlstring))
      .subscribe(data => (this.vehicle = data))
  }
}

//ghetto
function getLastNumberOfString(str) {
  var allNumbers = str
    .replace(/[^0-9]/g, ' ')
    .trim()
    .split(/\s+/)
  return parseInt(allNumbers[allNumbers.length - 1], 10)
}

import { Component, OnInit } from '@angular/core'
import { Vehicle } from '../vehicle.model'

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss'],
})
export class VehicleDetailComponent implements OnInit {
  vehicle: Vehicle
  location: string

  constructor() {
    this.vehicle = new Vehicle('Tesla', 'Model S', 'Luxury', null)
    this.location = 'Amsterdam'
  }

  ngOnInit() {}
}

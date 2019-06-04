import { Component, OnInit } from '@angular/core'
import { VehicleViewModel } from 'app/models/view-models/vehicle-view-model'

@Component({
  selector: 'app-vehicle-detail-page',
  templateUrl: './vehicle-detail-page.component.html',
  styleUrls: ['./vehicle-detail-page.component.scss'],
})
export class VehicleDetailPageComponent implements OnInit {
  location: string = 'Amsterdam'
  vehicle: VehicleViewModel

  constructor() {
    this.vehicle = {
      id: 123456789,
      brand: 'Tesla',
      imagePath: '',
      model: 'Model S',
      vehicleType: 'Luxury',
    }
  }

  ngOnInit() {}
}

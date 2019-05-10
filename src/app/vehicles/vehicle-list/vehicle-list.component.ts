import { Component, OnInit } from '@angular/core'
import { Vehicle } from '../../shared/models/vehicle.model'

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[] = [
    new Vehicle(
      'Tesla',
      'Model X',
      'Luxury',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/2018_Tesla_Model_S_75D.jpg/1920px-2018_Tesla_Model_S_75D.jpg'
    ),
    new Vehicle(
      'Tesla',
      'Model S',
      'Luxury',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/2017_Tesla_Model_X_100D_Front.jpg/1920px-2017_Tesla_Model_X_100D_Front.jpg'
    ),
    new Vehicle(
      'Tesla',
      'Model 3',
      'Luxury',
      'https://cleantechnica.com/files/2019/01/DSCN3035.jpg'
    ),
    new Vehicle(
      'Tesla',
      'Model X',
      'Luxury',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/2018_Tesla_Model_S_75D.jpg/1920px-2018_Tesla_Model_S_75D.jpg'
    ),
    new Vehicle(
      'Tesla',
      'Model X',
      'Luxury',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/2018_Tesla_Model_S_75D.jpg/1920px-2018_Tesla_Model_S_75D.jpg'
    ),
    new Vehicle(
      'Tesla',
      'Model S',
      'Luxury',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/2017_Tesla_Model_X_100D_Front.jpg/1920px-2017_Tesla_Model_X_100D_Front.jpg'
    ),
    new Vehicle(
      'Tesla',
      'Model 3',
      'Luxury',
      'https://cleantechnica.com/files/2019/01/DSCN3035.jpg'
    ),
    new Vehicle(
      'Tesla',
      'Model X',
      'Luxury',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/2018_Tesla_Model_S_75D.jpg/1920px-2018_Tesla_Model_S_75D.jpg'
    ),
  ]

  constructor() {}

  ngOnInit() {}
}

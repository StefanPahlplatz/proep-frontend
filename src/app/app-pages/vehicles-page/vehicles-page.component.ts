import { Component, OnInit } from '@angular/core'
import { VehicleViewModel } from '../../models/view-models/vehicle-view-model'
import { ActivatedRoute } from '@angular/router'
import { VehicleService } from 'app/services/vehicle.service'

@Component({
  selector: 'app-vehicles-page',
  templateUrl: './vehicles-page.component.html',
  styleUrls: ['./vehicles-page.component.scss'],
})
export class VehiclesPageComponent implements OnInit {
  public vehiclesReal = []
  vehicles: VehicleViewModel[] = [
    {
      id: 1,
      brand: 'Tesla',
      model: 'Model X',
      vehicleType: 'Luxury',
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/2018_Tesla_Model_S_75D.jpg/1920px-2018_Tesla_Model_S_75D.jpg',
    },
    {
      id: 2,
      brand: 'Tesla',
      model: 'Model S',
      vehicleType: 'Luxury',
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/2017_Tesla_Model_X_100D_Front.jpg/1920px-2017_Tesla_Model_X_100D_Front.jpg',
    },
    {
      id: 3,
      brand: 'Tesla',
      model: 'Model 3',
      vehicleType: 'Luxury',
      imagePath: 'https://cleantechnica.com/files/2019/01/DSCN3035.jpg',
    },
    {
      id: 4,
      brand: 'Tesla',
      model: 'Model X',
      vehicleType: 'Luxury',
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/2018_Tesla_Model_S_75D.jpg/1920px-2018_Tesla_Model_S_75D.jpg',
    },
    {
      id: 5,
      brand: 'Tesla',
      model: 'Model X',
      vehicleType: 'Luxury',
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/2018_Tesla_Model_S_75D.jpg/1920px-2018_Tesla_Model_S_75D.jpg',
    },
    {
      id: 6,
      brand: 'Tesla',
      model: 'Model S',
      vehicleType: 'Luxury',
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/2017_Tesla_Model_X_100D_Front.jpg/1920px-2017_Tesla_Model_X_100D_Front.jpg',
    },
    {
      id: 7,
      brand: 'Tesla',
      model: 'Model 3',
      vehicleType: 'Luxury',
      imagePath: 'https://cleantechnica.com/files/2019/01/DSCN3035.jpg',
    },
    {
      id: 8,
      brand: 'Tesla',
      model: 'Model X',
      vehicleType: 'Luxury',
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/2018_Tesla_Model_S_75D.jpg/1920px-2018_Tesla_Model_S_75D.jpg',
    },
  ]
  headerText: string

  constructor(
    private activatedRoute: ActivatedRoute,
    private vehicleService: VehicleService
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.headerText = 'Vehicles'
      if (params.place) {
        this.headerText += ` in ${params.place}`
      }
      if (params.type) {
        this.headerText += ` of type ${params.type}`
      }
    })
  }

  ngOnInit() {
    this.vehicleService
      .getVehicles()
      .subscribe(data => (this.vehiclesReal = data))
  }

  getImage(id: number): string {
    if (
      !this.vehiclesReal.some(v => v.id === id) ||
      this.vehiclesReal.filter(v => v.id == id)[0].images.length < 1
    ) {
      return 'https://conceptualminds.com/wp-content/uploads/2015/08/car-mechanic-website-placeholder-2.jpg'
    }

    return this.vehiclesReal.filter(v => v.id == id)[0].images[0].path
  }
}

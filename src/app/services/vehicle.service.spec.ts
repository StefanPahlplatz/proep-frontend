/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing'
import { VehicleService } from './vehicle.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('Service: Vehicle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleService],
      imports: [HttpClientTestingModule],
    })
  })

  it('should ...', inject([VehicleService], (service: VehicleService) => {
    expect(service).toBeTruthy()
  }))
})

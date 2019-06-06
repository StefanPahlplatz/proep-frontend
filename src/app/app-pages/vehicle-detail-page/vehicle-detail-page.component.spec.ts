import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { NavbarComponent } from '../../shared/components/navbar/navbar.component'
import { VehicleDetailPageComponent } from './vehicle-detail-page.component'

describe('VehicleDetailPageComponent', () => {
  let component: VehicleDetailPageComponent
  let fixture: ComponentFixture<VehicleDetailPageComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleDetailPageComponent, NavbarComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleDetailPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { VehiclesPageComponent } from './vehicles-page.component'
import { NavbarComponent } from '../../shared/components/navbar/navbar.component'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('VehiclesPageComponent', () => {
  let component: VehiclesPageComponent
  let fixture: ComponentFixture<VehiclesPageComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VehiclesPageComponent, NavbarComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

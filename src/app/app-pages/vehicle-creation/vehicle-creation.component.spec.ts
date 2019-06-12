/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { VehicleCreationComponent } from './vehicle-creation.component'

describe('VehicleCreationComponent', () => {
  let component: VehicleCreationComponent
  let fixture: ComponentFixture<VehicleCreationComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleCreationComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleCreationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

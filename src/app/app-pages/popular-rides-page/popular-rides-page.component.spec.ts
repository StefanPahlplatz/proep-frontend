import { RouterTestingModule } from '@angular/router/testing'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { NavbarComponent } from '../../shared/components/navbar/navbar.component'
import { PopularRidesPageComponent } from './popular-rides-page.component'

describe('PopularRidesPageComponent', () => {
  let component: PopularRidesPageComponent
  let fixture: ComponentFixture<PopularRidesPageComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PopularRidesPageComponent, NavbarComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularRidesPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { HomePageComponent } from './home-page.component'
import { NavbarComponent } from '../../shared/components/navbar/navbar.component'

describe('HomePageComponent', () => {
  let component: HomePageComponent
  let fixture: ComponentFixture<HomePageComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageComponent, NavbarComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

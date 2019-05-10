import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PopularRidesPageComponent } from './popular-rides-page.component'

describe('PopularRidesPageComponent', () => {
  let component: PopularRidesPageComponent
  let fixture: ComponentFixture<PopularRidesPageComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PopularRidesPageComponent],
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

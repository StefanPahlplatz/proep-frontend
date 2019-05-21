import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { MaterialModule } from '../../shared/material.module'
import { NavbarComponent } from '../../shared/components/navbar/navbar.component'
import { RegisterPageComponent } from './register-page.component'

describe('RegisterPageComponent', () => {
  let component: RegisterPageComponent
  let fixture: ComponentFixture<RegisterPageComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPageComponent, NavbarComponent],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpClientTestingModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

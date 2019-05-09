import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ApiService } from '../core/services/api.service'
import { AuthService } from '../core/services/auth.service'
import { ConfigService } from '../core/services/config.service'
import { LoginPageComponent } from './login-page.component'
import { MockApiService } from '../core/mocks/api.service.mock'
import { UserService } from '../core/services/user.service'

describe('LoginPageComponent', () => {
  let component: LoginPageComponent
  let fixture: ComponentFixture<LoginPageComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [
        UserService,
        {
          provide: ApiService,
          useClass: MockApiService,
        },
        ConfigService,
        AuthService,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

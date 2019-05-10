import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ApiService } from '../core/services/api.service'
import { AuthService } from '../core/services/auth.service'
import { ChangePasswordPageComponent } from './change-password.component'
import { ConfigService } from '../core/services/config.service'
import { MockApiService } from '../core/mocks/api.service.mock'
import { UserService } from '../core/services/user.service'

describe('ChangePasswordPageComponent', () => {
  let component: ChangePasswordPageComponent
  let fixture: ComponentFixture<ChangePasswordPageComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule],
      declarations: [ChangePasswordPageComponent],
      providers: [
        {
          provide: ApiService,
          useClass: MockApiService,
        },
        AuthService,
        UserService,
        ConfigService,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should be created', () => {
    expect(component).toBeTruthy()
  })
})

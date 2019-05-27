import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { MatToolbarModule, MatIconRegistry } from '@angular/material'
import { RouterTestingModule } from '@angular/router/testing'
import { TestBed, async } from '@angular/core/testing'

import { ApiService } from './services/api.service'
import { AppComponent } from './app.component'
import { AuthService } from './services/auth.service'
import { ConfigService } from './services/config.service'
import { UserService } from './services/user.service'
import { MockApiService } from './core/mocks/api.service.mock'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule, MatToolbarModule],
      providers: [
        MatIconRegistry,
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

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))
})

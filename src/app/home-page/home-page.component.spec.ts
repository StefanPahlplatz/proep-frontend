import { MatButtonModule, MatCardModule } from '@angular/material'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ApiCardComponent } from '../component/api-card/api-card.component'
import { ApiService } from '../core/services/api.service'
import { AuthService } from '../core/services/auth.service'
import { ConfigService } from '../core/services/config.service'
import { FooService } from '../core/services/foo.service'
import { HomePageComponent } from './home-page.component'
import { MockApiService } from '../core/mocks/api.service.mock'
import { UserService } from '../core/services/user.service'

describe('HomePageComponent', () => {
  let component: HomePageComponent
  let fixture: ComponentFixture<HomePageComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageComponent, ApiCardComponent],
      imports: [MatButtonModule, MatCardModule],
      providers: [
        {
          provide: ApiService,
          useClass: MockApiService,
        },
        AuthService,
        UserService,
        FooService,
        ConfigService,
      ],
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

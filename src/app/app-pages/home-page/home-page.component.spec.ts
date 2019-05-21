import { MatButtonModule, MatCardModule } from '@angular/material'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ApiService } from '../../services/api.service'
import { AuthService } from '../../services/auth.service'
import { ConfigService } from '../../services/config.service'
import { HomePageComponent } from './home-page.component'
import { MockApiService } from '../../core/mocks/api.service.mock'
import { UserService } from '../../services/user.service'

describe('HomePageComponent', () => {
  let component: HomePageComponent
  let fixture: ComponentFixture<HomePageComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      imports: [MatButtonModule, MatCardModule],
      providers: [
        {
          provide: ApiService,
          useClass: MockApiService,
        },
        AuthService,
        UserService,
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

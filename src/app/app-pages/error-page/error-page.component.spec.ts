import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { ErrorPageComponent } from './error-page.component'

describe('ErrorPageComponent', () => {
  let component: ErrorPageComponent
  let fixture: ComponentFixture<ErrorPageComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorPageComponent],
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: '**',
            component: ErrorPageComponent,
            data: {
              code: 404,
              title: 'Oops! Nothing was found',
              description:
                'The page you are looking for might have been removed had its name changed or is temporarily unavailable.',
            },
          },
        ]),
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should be created', () => {
    expect(component).toBeTruthy()
  })
})

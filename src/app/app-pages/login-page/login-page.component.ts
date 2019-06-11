import { ActivatedRoute, Router } from '@angular/router'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Subject, of } from 'rxjs'
import { delay, takeUntil, catchError } from 'rxjs/operators'

import { AuthService } from '../../services/auth.service'
import { IDisplayMessage } from '../../models/interfaces/display-message'
import { UserService } from '../../services/user.service'
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit, OnDestroy {
  public notification: IDisplayMessage
  public form: FormGroup
  public returnUrl: string

  public submitted = false
  public title = 'Login'

  private ngUnsubscribe: Subject<void> = new Subject<void>()

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  public ngOnInit() {
    this.route.params
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((params: IDisplayMessage) => {
        this.notification = params
      })
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/'
    this.form = this.formBuilder.group({
      username: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(64),
        ]),
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(32),
        ]),
      ],
    })
  }

  public ngOnDestroy() {
    this.ngUnsubscribe.next()
    this.ngUnsubscribe.complete()
  }

  public onResetCredentials() {
    this.userService
      .resetCredentials()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(res => {
        if (res.result === 'success') {
          alert('Password has been reset to 123 for all accounts')
        } else {
          alert('Server error')
        }
      })
  }

  public onSubmit() {
    this.notification = undefined
    this.submitted = true

    console.log('Value sent', this.form.value)

    this.authService
      .login(this.form.value)
      .pipe(
        // show me the animation
        delay(1000),
        catchError((error: HttpErrorResponse) => {
          this.submitted = false

          if (error.status >= 400 && error.status < 500) {
            this.notification = {
              msgType: 'error',
              msgBody: 'Incorrect username or password.',
            }
          } else if (error.status >= 500) {
            this.notification = {
              msgType: 'error',
              msgBody: 'Something went wrong in the server.',
            }
          }

          return of()
        })
      )
      .subscribe((isAuthenticated: boolean) => {
        if (isAuthenticated) {
          this.router.navigate([this.returnUrl])
        }
      })
  }
}

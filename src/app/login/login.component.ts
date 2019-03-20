import { ActivatedRoute, Router } from '@angular/router'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Subject } from 'rxjs'
import { delay, takeUntil } from 'rxjs/operators'

import { AuthService } from '../core/services/auth.service'
import { IDisplayMessage } from '../shared/interfaces/display-message'
import { UserService } from '../core/services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public title = 'Login'
  public githubLink = 'https://github.com/bfwg/angular-spring-starter'
  public form: FormGroup

  /**
   * Boolean used in telling the UI
   * that the form has been submitted
   * and is awaiting a response
   */
  public submitted = false

  /**
   * Notification message from received
   * form request or router
   */
  public notification: IDisplayMessage

  public returnUrl: string
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

  public repository() {
    window.location.href = this.githubLink
  }

  public onSubmit() {
    /**
     * Innocent until proven guilty
     */
    this.notification = undefined
    this.submitted = true

    this.authService
      .login(this.form.value)
      .pipe(
        // show me the animation
        delay(1000)
      )
      .subscribe(
        () => {
          this.userService.getMyInfo().subscribe()
          this.router.navigate([this.returnUrl])
        },
        () => {
          this.submitted = false
          this.notification = {
            msgType: 'error',
            msgBody: 'Incorrect username or password.',
          }
        }
      )
  }
}

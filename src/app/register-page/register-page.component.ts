import { ActivatedRoute, Router } from '@angular/router'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Subject } from 'rxjs'
import { delay, takeUntil } from 'rxjs/operators'

import { AuthService } from '../core/services/auth.service'
import { IDisplayMessage } from '../shared/interfaces/display-message'
import { UserService } from '../core/services/user.service'

@Component({
  selector: 'app-register',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  title = 'Sign up'
  githubLink = 'https://github.com/bfwg/angular-spring-starter'
  form: FormGroup

  /**
   * Boolean used in telling the UI
   * that the form has been submitted
   * and is awaiting a response
   */
  submitted = false

  /**
   * Notification message from received
   * form request or router
   */
  notification: IDisplayMessage

  returnUrl: string
  private ngUnsubscribe: Subject<void> = new Subject<void>()

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
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
      firstname: [''],
      lastname: [''],
    })
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next()
    this.ngUnsubscribe.complete()
  }

  repository() {
    window.location.href = this.githubLink
  }

  onSubmit() {
    /**
     * Innocent until proven guilty
     */
    this.notification = undefined
    this.submitted = true

    this.authService
      .signup(this.form.value)
      .pipe(
        // show me the animation
        delay(1000)
      )
      .subscribe(
        data => {
          console.log(data)
          this.authService.login(this.form.value).subscribe(() => {
            this.userService.getMyInfo().subscribe()
          })
          this.router.navigate([this.returnUrl])
        },
        error => {
          this.submitted = false
          console.log('Sign up error' + JSON.stringify(error))
          this.notification = {
            msgType: 'error',
            msgBody: error.error.errorMessage,
          }
        }
      )
  }
}

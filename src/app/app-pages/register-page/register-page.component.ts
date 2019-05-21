import { ActivatedRoute, Router } from '@angular/router'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Subject, of } from 'rxjs'
import { delay, takeUntil, catchError } from 'rxjs/operators'

import { AuthService } from '../../core/services/auth.service'
import { IDisplayMessage } from '../../models/interfaces/display-message'
import { UserService } from '../../core/services/user.service'

@Component({
  selector: 'app-register',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  form: FormGroup
  notification: IDisplayMessage
  returnUrl: string

  submitted = false
  title = 'Sign up'

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

  onSubmit() {
    this.notification = undefined
    this.submitted = true

    this.authService
      .signup(this.form.value)
      .pipe(
        // show me the animation
        delay(1000),
        catchError(error => {
          this.submitted = false
          console.error('Sign up error', error)
          this.notification = {
            msgType: 'error',
            msgBody: error.error.errorMessage,
          }
          return of()
        })
      )
      .subscribe(data => {
        console.log('Successfully signed up', data)
        this.authService.login(this.form.value).subscribe(() => {
          this.userService.getMyInfo().subscribe()
        })
        this.router.navigate([this.returnUrl])
      })
  }
}

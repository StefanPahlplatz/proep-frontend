import { HttpErrorResponse } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { mergeMap, delay, catchError } from 'rxjs/operators'

import { AuthService } from '../../services/auth.service'
import { IDisplayMessage } from '../../models/interfaces/display-message'
import { of } from 'rxjs'

@Component({
  selector: 'app-change-password-page',
  templateUrl: './change-password-page.component.html',
  styleUrls: ['./change-password-page.component.scss'],
})
export class ChangePasswordPageComponent implements OnInit {
  form: FormGroup
  /**
   * Boolean used in telling the UI
   * that the form has been submitted
   * and is awaiting a response
   */
  submitted = false

  /**
   * Diagnostic message from received
   * form request error
   */
  notification: IDisplayMessage

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      oldPassword: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(64),
        ]),
      ],
      newPassword: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(32),
        ]),
      ],
    })
  }

  onSubmit() {
    /**
     * Innocent until proven guilty
     */
    this.notification = undefined
    this.submitted = true

    this.authService
      .changePassword(this.form.value)
      .pipe(
        // show me the animation
        delay(1000),
        catchError((error: HttpErrorResponse) => {
          this.submitted = false
          this.notification = {
            msgType: 'error',
            msgBody: 'Invalid old password.',
          }
          return of()
        })
      )
      .subscribe(() => {
        this.authService.logout()
        this.router.navigate([
          '/login',
          {
            msgType: 'success',
            msgBody: 'Success! Please sign in with your new password.',
          },
        ])
      })
  }
}

import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { mergeMap, delay } from 'rxjs/operators'

import { AuthService } from '../core/services/auth.service'
import { IDisplayMessage } from '../shared/interfaces/display-message'

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
        mergeMap(() => this.authService.logout())
      )
      .subscribe(
        () => {
          this.router.navigate([
            '/login',
            {
              msgType: 'success',
              msgBody: 'Success! Please sign in with your new password.',
            },
          ])
        },
        error => {
          this.submitted = false
          this.notification = {
            msgType: 'error',
            msgBody: 'Invalid old password.',
          }
        }
      )
  }
}

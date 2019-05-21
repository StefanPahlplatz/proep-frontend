import { Injectable } from '@angular/core'

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private apiUrl = environment.airRnD.baseUrl
  private refreshTokenUrl = this.apiUrl + '/refresh'
  private loginUrl = this.apiUrl + '/login'
  private logoutUrl = this.apiUrl + '/logout'
  private changePasswordUrl = this.apiUrl + '/changePassword'
  private whoamiUrl = this.apiUrl + '/whoami'
  private userUrl = this.apiUrl + '/user'
  private usersUrl = this.userUrl + '/all'
  private resetCredentialsUrl = this.userUrl + '/reset-credentials'
  private fooUrl = this.apiUrl + '/foo'
  private signupUrl = this.apiUrl + '/signup'

  get reset_credentials_url(): string {
    return this.resetCredentialsUrl
  }

  get refresh_token_url(): string {
    return this.refreshTokenUrl
  }

  get whoami_url(): string {
    return this.whoamiUrl
  }

  get users_url(): string {
    return this.usersUrl
  }

  get login_url(): string {
    return this.loginUrl
  }

  get logout_url(): string {
    return this.logoutUrl
  }

  get change_password_url(): string {
    return this.changePasswordUrl
  }

  get foo_url(): string {
    return this.fooUrl
  }

  get signup_url(): string {
    return this.signupUrl
  }
}

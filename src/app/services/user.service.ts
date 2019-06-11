import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map } from 'rxjs/operators'

import { ApiService } from './api.service'
import { ConfigService } from './config.service'
import { UserDto } from '../models/dtos/user-dto'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public currentUser: any
  private baseUrl = environment.airRnD.baseUrl

  constructor(
    private apiService: ApiService,
    private config: ConfigService,
    private http: HttpClient
  ) {}

  public initUser() {
    const promise = this.apiService
      .get(this.config.refresh_token_url)
      .toPromise()
      .then(async res => {
        if (res.access_token !== null) {
          const user = await this.getMyInfo().toPromise()
          this.currentUser = user
        }
      })
      .catch(() => null)
    return promise
  }

  public resetCredentials() {
    return this.apiService.get(this.config.reset_credentials_url)
  }

  public getMyInfo() {
    return this.apiService
      .get(this.config.whoami_url)
      .pipe(map(user => (this.currentUser = user)))
  }

  public getAll() {
    return this.apiService.get(this.config.users_url)
  }

  public getUserByUserObject(user: UserDto) {
    this.http.post<UserDto>(`${this.baseUrl}/user`, user)
  }
}

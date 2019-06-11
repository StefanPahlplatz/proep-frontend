import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { AuthorityDto } from '../models/dtos/authority-dto'
import { JsonFormatConvertor } from '../shared/utilities/json-format-convertor'
import { UserCredentialDto } from '../models/dtos/user-credential-dto'
import { UserDto } from '../models/dtos/user-dto'
import { UserLoginDto } from '../models/dtos/user-login-dto'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.airRnD.baseUrl

  constructor(private http: HttpClient) {}

  public login(user: { username: any; password: any }): Observable<boolean> {
    const loginHeaders = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    })
    const body = `username=${user.username}&password=${user.password}`
    return this.http
      .post<UserLoginDto>(`${this.baseUrl}/login`, body, {
        headers: loginHeaders,
      })
      .pipe(
        map(response => {
          const convertedData: UserLoginDto = JsonFormatConvertor.objectKeysToCamelCase(
            response
          )
          if (convertedData) {
            this.saveTokenAndUserInfo(convertedData)
            return true
          } else {
            return false
          }
        })
      )
  }

  public signup(credential: UserCredentialDto): Observable<boolean> {
    const signupHeaders = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    })
    return this.http
      .post<UserDto>(`${this.baseUrl}/signup`, credential, {
        headers: signupHeaders,
      })
      .pipe(
        map(response => {
          if (!response) {
            return false
          }
          return true
        })
      )
  }

  public logout(): Observable<any> {
    return this.http
      .post<any>(`${this.baseUrl}/logout`, {})
      .pipe(map(() => this.clearSession()))
  }

  public changePassword(passwordChanger: any): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}/changePassword`,
      passwordChanger
    )
  }

  public isAuthenticated(): boolean {
    const accessToken = sessionStorage.getItem('airRnD.accessToken')
    if (accessToken) {
      return true
    } else {
      return false
    }
  }

  public getUserAuthorities(): AuthorityDto[] {
    const authoritiesJson = sessionStorage.getItem('airRnD.user.authorities')
    const authorities: AuthorityDto[] = JSON.parse(authoritiesJson)
    return authorities
  }

  private saveTokenAndUserInfo(userLoginDto: UserLoginDto): void {
    sessionStorage.setItem(
      'airRnD.accessToken',
      userLoginDto.userToken.accessToken
    )
    sessionStorage.setItem(
      'airRnD.expireIn',
      userLoginDto.userToken.expiresIn.toString()
    )
    sessionStorage.setItem(
      'airRnD.user.authorities',
      JSON.stringify(userLoginDto.loggedInUser.authorities)
    )
    sessionStorage.setItem('airRnD.user', JSON.stringify(userLoginDto))
  }

  private clearSession(): void {
    sessionStorage.clear()
  }
}

import { TokenDto } from './../models/dtos/token-dto'
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map, delay } from 'rxjs/operators'

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

  public logout(): void {
    sessionStorage.clear()
  }

  public changePassword(passwordChanger: any): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}/changePassword`,
      passwordChanger
    )
  }

  public isAuthenticated(): boolean {
    const accessToken = sessionStorage.getItem('airRnD.accessToken')
    return accessToken ? true : false
  }

  public getCurrentUser(): Observable<UserDto> {
    return this.http.get<UserDto>(`${this.baseUrl}/whoami`).pipe(
      map(response => {
        const convertedData: UserDto = JsonFormatConvertor.objectKeysToCamelCase(
          response
        )
        return convertedData
      })
    )
  }

  public getUserAuthorities(): AuthorityDto[] {
    const authoritiesJson = sessionStorage.getItem('airRnD.user.authorities')
    const authorities: AuthorityDto[] = JSON.parse(authoritiesJson)
    return authorities
  }

  public getAccessToken(): string {
    return sessionStorage.getItem('airRnD.accessToken')
  }

  public getRefreshToken(): Observable<TokenDto> {
    return this.http
      .get<TokenDto>(`${this.baseUrl}/refresh`, {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.getAccessToken()}`,
        }),
      })
      .pipe(
        map(response => {
          const convertedData: TokenDto = JsonFormatConvertor.objectKeysToCamelCase(
            response
          )

          if (!convertedData.accessToken) {
            this.logout()
          } else {
            sessionStorage.setItem(
              'airRnD.accessToken',
              convertedData.accessToken
            )
          }

          return convertedData
        })
      )
  }

  private saveTokenAndUserInfo(userLoginDto: UserLoginDto): void {
    sessionStorage.clear()
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
  }
}

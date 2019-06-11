import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { AuthService } from '../auth.service'
import { environment } from '../../../environments/environment'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private airRnDApi = environment.airRnD.baseUrl

  constructor(private authService: AuthService) {}

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.includes(this.airRnDApi)) {
      req = this.addToken(req)
    }

    return next.handle(req)
  }

  public addToken(req: HttpRequest<any>): HttpRequest<any> {
    const token = this.authService.getAccessToken()

    if (!token) {
      return req
    }

    return req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    })
  }
}

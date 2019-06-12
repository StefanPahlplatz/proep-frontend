import { environment } from './../../../environments/environment'
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

import { AuthService } from '../auth.service'
import { TokenDto } from './../../models/dtos/token-dto'
import { mergeMap, catchError } from 'rxjs/operators'
import { Router } from '@angular/router'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url === `${environment.airRnD.baseUrl}/refresh`) {
      return next.handle(req)
    }
    return this.authService.getRefreshToken().pipe(
      mergeMap((token: TokenDto) => {
        if (!token && token.accessToken) {
          return next.handle(req)
        }

        const newReq = req.clone({
          headers: req.headers.set(
            'Authorization',
            `Bearer ${token.accessToken}`
          ),
        })

        return next.handle(newReq)
      })
    )
    // const token = this.authService.getAccessToken();
    // const newReq = req.clone({
    //   headers: req.headers.set('Authorization', `Bearer ${token}`),
    // });
    // return next.handle(newReq);
  }
}

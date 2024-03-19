import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable()
export class InterceptorsInterceptor implements HttpInterceptor {

  constructor(
    private service: TokenService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.service.possuiToken()){
      const token = this.service.retornarToken();
      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`
        }
      })
    }

    return next.handle(request);
  }
}

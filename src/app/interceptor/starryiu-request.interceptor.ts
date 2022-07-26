import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { delay, Observable, tap } from 'rxjs';
import { StoreService } from '../shared/store.service';
import { environment } from '../../environments/environment';

@Injectable()
export class StarryiuRequestInterceptor implements HttpInterceptor {
  private token = ['0ad1435f7f3a0a5f659', 'ba596de769986a2ac41e8'];
  private access_token = `token ${this.token.join('')}`;
  private requestCount = 0;

  constructor(private storeService: StoreService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.requestCount++;
    // this.storeService.changeGlobalLoadingSource(true);
    const authReq = request.clone({
      headers: request.headers.set('Authorization', this.access_token),
    });
    return next.handle(authReq).pipe(
      delay(200),
      tap({
        complete: () => {
          this.requestCount--;
          this.requestCount === 0 &&
            this.storeService.changeGlobalLoadingSource(false);
        },
      })
    );
  }
}

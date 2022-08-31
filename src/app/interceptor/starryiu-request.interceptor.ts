import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, delay, Observable, retry, tap, throwError } from 'rxjs';
import { StoreService } from '../shared/store.service';
import { environment } from '../../environments/environment';

@Injectable()
export class StarryiuRequestInterceptor implements HttpInterceptor {
  private token = ['0ad1435f7f3a0a5f659', 'ba596de769986a2ac41e8'];
  private access_token = `token ${this.token.join('')}`;
  private requestCount = 0;

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
      console.error('客户端错误，可能有网络波动。');
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
      console.error('服务端错误，访问 github api 出错。');
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  constructor(private storeService: StoreService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.requestCount++;
    environment.production && this.storeService.changeGlobalLoadingSource(true);
    const authReq = request.clone({
      headers: request.headers.set('Authorization', this.access_token),
    });
    return next
      .handle(authReq)
      .pipe(retry(3), catchError(this.handleError))
      .pipe(
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

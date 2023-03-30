import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { finalize, Observable, tap } from 'rxjs';

@Injectable()
export class RestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const url = `http://localhost:15000/api/${request.url}`;
    // const url = `https://api.gigaalbum.com:30000/api/${request.url}`;
    const urlReq = request.clone({
      url,
      headers: new HttpHeaders({
        // 'content-Type': "*",
      }),
    });

    return next.handle(urlReq).pipe(
      tap(
        async (event) => {
          if (event instanceof HttpResponse) {
            console.log(event.status);
          }
        },
        (error) => {
          if (error instanceof HttpErrorResponse) {
            console.log(error.error.message);
          }
        }
      ),
      finalize(() => {
        
      })
    );
  }

}

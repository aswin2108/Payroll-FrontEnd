import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token=localStorage.getItem('jwtToken');

    if(token){
      request=request.clone({
        setHeaders:{
          Authorization:`Bearer ${token}`
        }
      });
    }
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 || error.status === 403) {
          // Handle the error: redirect to login page, show a message, etc.
          // Example:
          console.error('Unauthorized or Forbidden', error);
          alert('Unauthorized or Forbidden');
          console.log(token);
          
          // You can also use a service to handle redirection or showing a message
        }
        return throwError(error);
      })
    );
  }
}

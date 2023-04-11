import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let requestBody: any;
    if(request.body !== null){
      requestBody= request.body;
      requestBody['location'] = 'hyd';
    }

    return next.handle(request.clone({
     body:requestBody
    }));
  }
}

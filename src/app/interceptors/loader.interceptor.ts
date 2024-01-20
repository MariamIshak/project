import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from '../Services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loadSrv:LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //open Connection
    this.loadSrv.showloader()
    return next.handle(request).pipe(
      finalize(()=>{
        setTimeout(()=>
          this.loadSrv.hideloader()
          ,1000
        )
      })
    );
  }
}

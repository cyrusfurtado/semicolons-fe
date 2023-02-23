import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { HelperService } from './helper.service';

@Injectable()
export class AppInterceptorService implements HttpInterceptor {

  constructor(private helper: HelperService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.helper.loader.emit({hide: false})
    return next.handle(req).pipe(
      finalize(() => this.helper.loader.emit({hide: true}))
    )
  }
}

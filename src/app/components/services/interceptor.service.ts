import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpInterceptor
} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private _router: Router) {}
  intercept(request: HttpRequest<any>, next: any): any {
    return next.handle(request).pipe(
      map(resp => {
        if (resp.status === 500) {
          this._router.navigate(['/server-error']);
        }
        return resp;
    })
    );
  }
}

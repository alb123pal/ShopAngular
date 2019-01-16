import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class ProductListCainActivateGuard implements CanActivate {
  constructor(private _router: Router) {}

  canActivate(): boolean {
    const isLogged = JSON.parse(localStorage.getItem('isAuth')) === true;
    if (isLogged) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';

@Injectable()
export class ProductListCainActivateGuard implements CanActivate {
  constructor(private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (JSON.parse(localStorage.getItem('isAuth')) === true) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}

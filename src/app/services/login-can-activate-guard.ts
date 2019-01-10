import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';

@Injectable()
export class LoginCanActivateGuard implements CanActivate {
  constructor(private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (JSON.parse(localStorage.getItem('isAuth')) === true && JSON.parse(localStorage.getItem('isAdmin')) === true) {
      this._router.navigate(['/details']);
      return false;
    } else if (JSON.parse(localStorage.getItem('isAuth')) === true) {
      this._router.navigate(['/lists']);
      return false;
    } else {
      return true;
    }
  }
}

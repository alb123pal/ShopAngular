import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class LoginCanActivateGuard implements CanActivate {
  constructor(private _router: Router) {}

  canActivate(): boolean {
    const isLoggedAdmin = JSON.parse(localStorage.getItem('isAdmin')) === true;
    const isLogged = JSON.parse(localStorage.getItem('isAuth')) === true;

    if (isLogged && isLoggedAdmin) {
      this._router.navigate(['/details']);
      return false;
    } else if (isLogged) {
      this._router.navigate(['/lists']);
      return false;
    } else {
      return true;
    }
  }
}

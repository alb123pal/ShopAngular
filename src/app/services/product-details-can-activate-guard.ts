import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { DataService } from './product-data.service';

@Injectable()
export class ProductDeatilsCainActivateGuard implements CanActivate {
  constructor(private _router: Router, private _productDetails: DataService) {}
  product;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (JSON.parse(localStorage.getItem('isAuth')) === true) {
      this._productDetails.currentProduct.subscribe(product => this.product = product);
      if (!!this.product[0]) {
        return true;
      } else {
        this._router.navigate(['/lists']);
      return false;
      }
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}

import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { DataService } from './product-data.service';

@Injectable()
export class ProductDeatilsCainActivateGuard implements CanActivate {
  constructor(private _router: Router, private _productDetails: DataService) {}
  product: Object;

  canActivate(): boolean {
    const isLogged = JSON.parse(localStorage.getItem('isAuth')) === true;

    if (isLogged) {
      this._productDetails.currentProduct.subscribe(product => this.product = product);
      const isExistDetailsProduct = !!this.product[0];
      if (isExistDetailsProduct) {
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

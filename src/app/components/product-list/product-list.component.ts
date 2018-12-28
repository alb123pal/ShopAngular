import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { DataService } from '../services/product-data.service';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponentComponent implements OnInit {
  isHiddenFilterOptions = false;
  userName = '';
  isAdmin = JSON.parse(localStorage.getItem('isAdmin'));
  allProducts;
  product: any;
  productFilter: any;
  category: number;
  rating: number;
  priceFrom: number;
  priceTo: number;
  gender: string;

  constructor(private _userService: UserService, private _route: Router, private _productDetails: DataService) {
  }

  ngOnInit() {
    this.userName = localStorage.getItem('login');
    this._userService.getProducts().subscribe(
      (res) => {
        this.allProducts = res.body;
        for (let i = 0; i < this.allProducts.length; i++) {
          this.allProducts[i].activeStar = [];
          this.allProducts[i].inActiveStar = [];
          for (let j = 0; j < this.allProducts[i].rating; j++) {
            this.allProducts[i].activeStar.push('1');
          }
          for (let j = 0; j < 5 - this.allProducts[i].rating; j++) {
            this.allProducts[i].inActiveStar.push('1');
          }
        }
      }
    );
  }
  applyFilter() {
    const params: any = {};
    // tslint:disable-next-line:no-unused-expression
    this.gender !== undefined ? params.gender = this.gender : null;
    // tslint:disable-next-line:no-unused-expression
    this.category !== undefined ? params.categoryId = +this.category : null;
    // tslint:disable-next-line:no-unused-expression
    this.rating !== undefined ? params.rating = +this.rating : null;
    // tslint:disable-next-line:no-unused-expression
    this.priceFrom !== undefined ? params.priceFrom = +this.priceFrom : null;
    // tslint:disable-next-line:no-unused-expression
    this.priceTo !== undefined ? params.priceTo = +this.priceTo : null;
    // tslint:disable-next-line:no-unused-expression
    this.productFilter = params;
  }

  clearFilter() {
    this.productFilter = {};
  }

  searchProduct(event) {
    this.productFilter = {};
    if (event.target.value === '') {
      this.productFilter = {};
    }
    this.productFilter = {
      'searchProduct': event.target.value
    };
  }

  showHideFilterOptions() {
    this.isHiddenFilterOptions = !this.isHiddenFilterOptions;
  }

  navigateToDetails(idProduct) {
    this.product = this.allProducts.filter(obj => {
      return obj.id === idProduct;
    });
    this._productDetails.changeProduct(this.product);
    this._route.navigate(['/details', {'id': idProduct}]);
  }

  logout() {
    localStorage.clear();
    this._route.navigate(['login']);
  }
}

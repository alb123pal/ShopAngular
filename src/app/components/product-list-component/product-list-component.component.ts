import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.scss']
})
export class ProductListComponentComponent implements OnInit {
  isHiddenFilterOptions = false;
  userName = '';
  isAdmin = JSON.parse(localStorage.getItem('isAdmin'));
  allProducts;
  productFilter: any;
  category: number;
  rating: number;
  priceFrom: number;
  priceTo: number;
  gender: string;

  constructor(private _userService: UserService, private _route: Router) {
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
    const params = {};
    this.gender !== undefined ? params.gender = this.gender : null;
    this.category !== undefined ? params.categoryId = +this.category : null;
    this.rating !== undefined ? params.rating = +this.rating : null;
    this.priceFrom !== undefined ? params.priceFrom = +this.priceFrom : null;
    this.priceTo !== undefined ? params.priceTo = +this.priceTo : null;
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
    console.log(event.target.value);
  }

  showHideFilterOptions() {
    this.isHiddenFilterOptions = !this.isHiddenFilterOptions;
  }

  logout() {
    localStorage.clear();
    this._route.navigate(['login']);
  }
}

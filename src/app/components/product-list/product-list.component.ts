import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { DataService } from '../../services/product-data.service';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponentComponent implements OnInit {
  page = 1;
  count;
  perPage = 4;
  pagesToShow = 3;
  isHiddenFilterOptions = false;
  isAdmin = JSON.parse(localStorage.getItem('isAdmin'));
  allProducts;
  product: any;
  productFilter: any;
  category: number;
  rating: number;
  priceFrom: number;
  priceTo: number;
  gender: string;
  categoryOptions = [
    'Wear', 'Jeans', 'Coats', 'Sweaters', 'Boats',
  ];
  ratingOptions = [
    1, 2, 3, 4, 5
  ];

  constructor(private _userService: UserService, private _route: Router, private _productDetails: DataService) {
  }

  ngOnInit() {
    this._userService.getProducts().subscribe(
      (res) => {
        this.allProducts = res.body;
        this.count = this.allProducts.length;
        this.displayProductOnSpecifiedPage();
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
  applyFilter(): void {
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

  clearFilter(): void {
    this.productFilter = {};
  }

  searchProducts(event): void {
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

  selectGender(gender): void {
    this.gender = gender;
  }

  selectCategory(category): void {
    this.category = +category;
  }

  selectRating(rating): void {
    this.rating = ++rating;
  }

  navigateToDetails(idProduct) {
    this.product = this.allProducts.filter(obj => {
      return obj.id === idProduct;
    });
    this._productDetails.changeProduct(this.product);
    this._route.navigate(['/details', {'id': idProduct}]);
  }



  getMin(): number {
    return ((this.perPage * this.page) - this.perPage) + 1;
  }

  getMax(): number {
    let max = this.perPage * this.page;
    if (max > this.count) {
      max = this.count;
    }
    return max;
  }

  onPage(n: number): void {
    this.page = n;
    this.displayProductOnSpecifiedPage();
  }

  onPrev(): void {
    this.page--;
    this.displayProductOnSpecifiedPage();
  }

  onNext(): void {
    this.page++;
    this.displayProductOnSpecifiedPage();
  }

displayProductOnSpecifiedPage(): void {
  this.productFilter = {
    'displaySpecifiedPage': {
      'min': this.getMin(),
      'max': this.getMax()
    }
  };
}

  totalPages(): number {
    return Math.ceil(this.count / this.perPage) || 0;
  }

  lastPage(): boolean {
    return this.perPage * this.page > this.count;
  }

  getPages(): number[] {
    const c = Math.ceil(this.count / this.perPage);
    const p = this.page || 1;
    const pagesToShow = this.pagesToShow || 9;
    const pages: number[] = [];
    pages.push(p);
    const times = pagesToShow - 1;
    for (let i = 0; i < times; i++) {
      if (pages.length < pagesToShow) {
        if (Math.min.apply(null, pages) > 1) {
          pages.push(Math.min.apply(null, pages) - 1);
        }
      }
      if (pages.length < pagesToShow) {
        if (Math.max.apply(null, pages) < c) {
          pages.push(Math.max.apply(null, pages) + 1);
        }
      }
    }
    pages.sort((a, b) => a - b);
    return pages;
  }
}

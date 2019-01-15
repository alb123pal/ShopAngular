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
        const firstPage = {
          'min': 1,
          'max': 4
        };
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
        this.displayProductOnSpecifiedPage(firstPage);
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

  searchProducts(event: any): void {
    this.productFilter = {};
    if (event.target.value === '') {
      this.productFilter = {};
    }
    this.productFilter = {
      'searchProduct': event.target.value
    };
  }

  showHideFilterOptions(): void {
    this.isHiddenFilterOptions = !this.isHiddenFilterOptions;
  }

  selectGender(gender: string): void {
    this.gender = gender;
  }

  selectCategory(category: string): void {
    this.category = +category;
  }

  selectRating(rating: number): void {
    this.rating = ++rating;
  }

  setMinimumPrice(event): void {
    const price = +event.target.value;
    this.priceFrom = price;
  }

  setMaximumPrice(event): void {
    const price = +event.target.value;
    this.priceTo = price;
  }

  navigateToDetails(idProduct: number): void {
    this.product = this.allProducts.filter(product => {
      return product.id === idProduct;
    });
    this._productDetails.changeProduct(this.product);
    this._route.navigate(['/details', {'id': idProduct}]);
  }

  displayProductOnSpecifiedPage(specifiedProducts: Object): void {
    this.productFilter = {
      'displaySpecifiedPage': specifiedProducts
    };
  }
}


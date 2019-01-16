import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { DataService } from '../../services/product-data.service';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  isHiddenFilterOptions = false;
  isHiddenPagination = false;
  isAdmin = JSON.parse(localStorage.getItem('isAdmin'));
  allProducts;
  productDetails: any;
  productFilter: any;
  categoryValue: number;
  ratingValue: number;
  priceFromValue: number;
  priceToValue: number;
  genderValue: string;
  categoryOptions = [
    'Wear', 'Jeans', 'Coats', 'Sweaters', 'Boats',
  ];
  ratingOptions = [
    1, 2, 3, 4, 5
  ];
  productsOnFirstPage = {
    'min': 1,
    'max': 4
  };

  constructor(private _userService: UserService, private _route: Router, private _productDetails: DataService) {
  }

  ngOnInit() {
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
        this.displayProductOnSpecifiedPage(this.productsOnFirstPage);
      }
    );
  }

  applyFilter(): void {
    const filterParams: any = {};
    this.isHiddenPagination = true;
    // tslint:disable-next-line:no-unused-expression
    this.genderValue !== undefined ? filterParams.gender = this.genderValue : null;
    // tslint:disable-next-line:no-unused-expression
    this.categoryValue !== undefined ? filterParams.categoryId = +this.categoryValue : null;
    // tslint:disable-next-line:no-unused-expression
    this.ratingValue !== undefined ? filterParams.rating = +this.ratingValue : null;
    // tslint:disable-next-line:no-unused-expression
    this.priceFromValue !== undefined ? filterParams.priceFrom = +this.priceFromValue : null;
    // tslint:disable-next-line:no-unused-expression
    this.priceToValue !== undefined ? filterParams.priceTo = +this.priceToValue : null;
    // tslint:disable-next-line:no-unused-expression
    this.productFilter = filterParams;
  }

  clearFilter(): void {
    this.productFilter = {};
    this.isHiddenPagination = false;
    this.displayProductOnSpecifiedPage(this.productsOnFirstPage);
  }

  searchProducts(event: any): void {
    this.productFilter = {};
    if (event.target.value === '') {
      this.productFilter = {};
      this.isHiddenPagination = false;
      this.displayProductOnSpecifiedPage(this.productsOnFirstPage);
      return ;
    }
    this.productFilter = {
      'searchProduct': event.target.value
    };
    this.isHiddenPagination = true;
  }

  showHideFilterOptions(): void {
    this.isHiddenFilterOptions = !this.isHiddenFilterOptions;
  }

  selectGender(gender: string): void {
    this.genderValue = gender;
  }

  selectCategory(category: string): void {
    this.categoryValue = +category;
  }

  selectRating(rating: number): void {
    this.ratingValue = ++rating;
  }

  setMinimumPrice(event): void {
    const price = +event.target.value;
    this.priceFromValue = price;
  }

  setMaximumPrice(event): void {
    const price = +event.target.value;
    this.priceToValue = price;
  }

  navigateToDetails(idProduct: number): void {
    this.productDetails = this.allProducts.filter(product => {
      return product.id === idProduct;
    });
    this._productDetails.changeProduct(this.productDetails);
    this._route.navigate(['/details', {'id': idProduct}]);
  }

  displayProductOnSpecifiedPage(specifiedProducts: Object): void {
    this.productFilter = {
      'displaySpecifiedPage': specifiedProducts
    };
  }
}


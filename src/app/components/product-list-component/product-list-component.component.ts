import { Component, OnInit } from '@angular/core';
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

  constructor(private _userService: UserService, private _route: Router) { }

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

  showHideFilterOptions() {
    this.isHiddenFilterOptions = !this.isHiddenFilterOptions;
  }

  logout() {
    localStorage.clear();
    this._route.navigate(['login']);
  }
}

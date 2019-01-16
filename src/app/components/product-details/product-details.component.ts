import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/product-data.service';


@Component({
  selector: 'app-product-details-component',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  userName = '';
  product: any;
  isOpenEditModal = false;
  isAdmin: string;

  constructor(private _route: ActivatedRoute, private _productDetails: DataService) { }

  ngOnInit() {
    this.isAdmin = JSON.parse(localStorage.getItem('isAdmin'));
    this.userName = localStorage.getItem('login');
    this._productDetails.currentProduct.subscribe(product => this.product = product);
  }
}

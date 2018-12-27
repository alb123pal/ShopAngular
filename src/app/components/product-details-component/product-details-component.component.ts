import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/product-data.service';


@Component({
  selector: 'app-product-details-component',
  templateUrl: './product-details-component.component.html',
  styleUrls: ['./product-details-component.component.scss']
})
export class ProductDetailsComponentComponent implements OnInit {
  userName = '';
  product;
  isOpenEditModal = false;
  private _id: number;
  constructor(private _route: ActivatedRoute, private _productDetails: DataService) { }

  ngOnInit() {
    this.userName = localStorage.getItem('login');
    this._id = +this._route.snapshot.paramMap.get('id');
    this._productDetails.currentProduct.subscribe(product => this.product = product);
  }

  changeDisplayModal() {
    this.isOpenEditModal = !this.isOpenEditModal;
  }
}

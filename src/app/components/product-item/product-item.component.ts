import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Object;
  constructor(private _route: Router) { }

  ngOnInit() {
  }

  navigateToDetails(idProduct) {
    this._route.navigate(['/details', {'id': idProduct}]);
  }
}

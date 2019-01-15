import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Object;
  @Output() sendIdProduct: EventEmitter<number> = new EventEmitter<number>();
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  navigateToDetails(idProduct: number) {
    this.sendIdProduct.emit(idProduct);
  }
}

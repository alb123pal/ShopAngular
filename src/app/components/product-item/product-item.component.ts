import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Object;
  @Output() sendIdProduct: EventEmitter<number> = new EventEmitter<number>();
  isAdmin = JSON.parse(localStorage.getItem('isAdmin'));

  constructor() { }

  ngOnInit() {
  }

  navigateToDetails(idProduct: number) {
    this.sendIdProduct.emit(idProduct);
  }
}

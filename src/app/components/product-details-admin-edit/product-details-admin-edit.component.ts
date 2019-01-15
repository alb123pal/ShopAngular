import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-details-admin-edit',
  templateUrl: './product-details-admin-edit.component.html',
  styleUrls: ['./product-details-admin-edit.component.scss']
})
export class ProductDetailsAdminEditComponent implements OnInit {
  categoryOptions = [
    'Wear', 'Jeans', 'Coats', 'Sweaters', 'Boats',
  ];
  ratingOptions = [
    1, 2, 3, 4, 5
  ];
  @Output() cancelModalEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }
  ngOnInit() {
  }

  changeDisplayModal(): void {
    this.cancelModalEvent.emit();
  }
}

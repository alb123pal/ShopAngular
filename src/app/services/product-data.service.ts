import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private specifiedProduct = new BehaviorSubject([]);
  currentProduct = this.specifiedProduct.asObservable();

  constructor() { }

  changeProduct(product) {
    this.specifiedProduct.next(product);
  }
}

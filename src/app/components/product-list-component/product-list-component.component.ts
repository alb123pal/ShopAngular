import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.scss']
})
export class ProductListComponentComponent implements OnInit {

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getProducts().subscribe(
      (res) => {
        console.log(res);
      }
    );
  }
}

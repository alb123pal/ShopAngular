import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-shop-component',
  templateUrl: './login-shop-component.component.html',
  styleUrls: ['./login-shop-component.component.scss']
})
export class LoginShopComponentComponent implements OnInit {
  @Input() login: string;
  @Input() password: string;
  message = '';
  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    this._userService.authorizationUser(this.login, this.password);
    // .subscribe(
    //   (res) => {
    //     console.log('data: ', res.headers);
    //     console.log('data: ', res.headers.keys());
    //     // this._router.navigate(['list']);
    //   },
    //   (error) => {
    //     this.message = 'You enter wrong login and password';
    //     console.log('error:', error.headers);
    //   }
    // );
  }
}

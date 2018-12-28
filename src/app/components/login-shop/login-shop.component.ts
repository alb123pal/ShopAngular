import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import {HttpHeaders, HttpRequest} from '@angular/common/http';
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
    this._userService.authorizationUser(this.login, this.password).subscribe(
      (res) => {
        let isUser;
        const sessionToken = res.headers.get('session-token');
        localStorage.setItem('sessionToken', sessionToken);
        localStorage.setItem('isAuth', 'true');
        this._userService.getUsers().subscribe(
          (responseRole) => {
            const loggedUser = this.verificationUser(responseRole);
            localStorage.setItem('login', loggedUser.login);
            isUser = loggedUser.roleId;
            if (isUser) {
              localStorage.setItem('isAdmin', 'false');
            } else {
              localStorage.setItem('isAdmin', 'true');
            }
            this._router.navigate(['lists']);
          }
        );
      },
      (error) => {
        this.message = 'You enter wrong login or password';
        console.log('error:', error);
      }
    );
  }

  verificationUser(responseRole) {
    const login = localStorage.getItem('login');
    let user;
    responseRole.body.find( obj => {
      if (obj.login === login) {
        user = obj;
      }
    });
    return user;
  }
}

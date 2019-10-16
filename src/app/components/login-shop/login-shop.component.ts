import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Post } from '../../reducers/post-model';
import * as PostActions from '../../reducers/post.action';

interface AppState {
  post: Post;
}

@Component({
  selector: 'app-login-shop-component',
  templateUrl: './login-shop.component.html',
  styleUrls: ['./login-shop.component.scss']
})
export class LoginShopComponent implements OnInit {
  private _login: string;
  private _password: string;
  private _validInputModel: Object;
  errorMessage = '';
  isError = true;

  post: Observable<Post>;

  constructor(private _userService: UserService, private _router: Router, private _store: Store<AppState>) { }

  ngOnInit() {
    this._validInputModel = {
      validLogin: false,
      validPassword: false
    };
    this.post = this._store.select('post');
  }

  setLogin(login: Object): void {
    this._login = login['value'];
    this._validInputModel['validLogin'] = login['valid'];
    this.checkIsAnError();
  }

  setPassword(password: Object): void {
    this._password = password['value'];
    this._validInputModel['validPassword'] = password['valid'];
    this.checkIsAnError();
  }

  checkIsAnError(): void {
    const isValidCredentials = this._validInputModel['validPassword'] && this._validInputModel['validLogin'];
    if (isValidCredentials) {
      this.isError = false;
    } else {
      this.isError = true;
    }
  }

  authorizeUser(): void {
    this._userService.authorizeUser(this._login, this._password).subscribe(
      (res) => {
        const sessionToken = res.headers.get('session-token');

        localStorage.setItem('sessionToken', sessionToken);
        localStorage.setItem('isAuth', 'true');

        this._userService.getUsers().subscribe(
          (responseRole) => {
            let userRole: number;
            const loggedUser = this.verifyUser(responseRole.body);

            this._store.dispatch(new PostActions.SetLogin(loggedUser['login']));

            localStorage.setItem('login', loggedUser['login']);
            userRole = loggedUser['roleId'];

            if (userRole) {
              localStorage.setItem('isAdmin', 'false');
            } else {
              localStorage.setItem('isAdmin', 'true');
            }

            this._router.navigate(['lists']);
          }
        );
      },
      () => {
        this.errorMessage = 'You enter wrong login or password';
      }
    );
  }

  verifyUser(allUsers): Object {
    const login = localStorage.getItem('login');
    let loggedUser: Object;
    allUsers.find( user => {
      if (user.login === login) {
        loggedUser = user;
      }
    });
    return loggedUser;
  }
}

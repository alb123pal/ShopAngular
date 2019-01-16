import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

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

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit() {
    this._validInputModel = {
      validLogin: false,
      validPassword: false
    };
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

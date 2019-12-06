import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select } from '@ngrx/store';
import { State } from '@ngrx/store';
import { Store } from '@ngrx/store';

import { UserState } from '../../store/models/user.model';
import * as userActions from '../../store/actions/active-user.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName = '';

  constructor(private _route: Router, private _state: State<UserState>, private _store: Store<any>) { }

  ngOnInit() {
    this._state.pipe(
      select('activeUser')
    ).subscribe((store) => {
      this.userName = store.username;
    });
  }

  logout(): void {
    localStorage.clear();
    this._store.dispatch(new userActions.LogoutActiveUser());
    this._route.navigate(['login']);
  }
}

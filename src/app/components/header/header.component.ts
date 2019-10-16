import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select } from '@ngrx/store';
import { State } from '@ngrx/store';
import { Post } from '../../reducers/post-model';

interface AppState {
  post: Post;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName = '';

  constructor(private _route: Router, private _state: State<AppState>) { }

  ngOnInit() {
    this._state.pipe(
      select('post')
    ).subscribe((store) => {
      this.userName = store.loginName;
    });

  }

  logout(): void {
    localStorage.clear();
    this._route.navigate(['login']);
  }
}

import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-login',
  templateUrl: './input-login.component.html',
  styleUrls: ['./input-login.component.scss']
})
export class InputFormComponent implements OnInit {
  @Input() field: string;
  @Output() inputLoginValue: EventEmitter<Object> = new EventEmitter<Object>();
  @ViewChild('loginInput') loginInputRef: ElementRef;
  private _login: string;

  get login(): string {
    return this._login;
  }

  set login(newLogin: string) {
    this._login = newLogin;
    this.inputLoginValue.emit(
      {
        value: this._login,
        valid: this.loginInputRef['valid']
    });
  }

  constructor() { }

  ngOnInit() {
  }

}

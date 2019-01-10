import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss']
})
export class InputPasswordComponent implements OnInit {
  private _password: string;
  @Input() field: string;
  @Output() inputPasswordValue: EventEmitter<Object> = new EventEmitter<Object>();
  @ViewChild('passwordInput') passwordInputRef: ElementRef;

  get password(): string {
    return this._password;
  }

  set password(newPassword: string) {
    this._password = newPassword;
    this.inputPasswordValue.emit(
      {
        value: this._password,
        valid: this.passwordInputRef['valid']
    });
  }

  constructor() { }

  ngOnInit() {
  }
}

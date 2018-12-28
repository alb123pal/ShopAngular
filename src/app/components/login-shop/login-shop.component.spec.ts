import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { LoginShopComponentComponent } from './login-shop.component';
import {DebugElement, inject} from '@angular/core';
import {By} from '@angular/platform-browser';
import { UserService } from '../services/user.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

describe('LoginShopComponentComponent', () => {
  let component: LoginShopComponentComponent;
  let fixture: ComponentFixture<LoginShopComponentComponent>;
  let de: DebugElement;
  let element;
  let userService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginShopComponentComponent ],
      imports: [FormsModule, HttpClientModule, RouterModule, RouterTestingModule],
        providers: [ HttpClient, UserService ]
    })
    .compileComponents();
    userService = TestBed.get(UserService);
  }));

  beforeEach( () => {
    fixture = TestBed.createComponent(LoginShopComponentComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('display login caption', () => {
    const h2 = de.query(By.css('h2'));
    expect(h2.nativeElement.innerText).toBe('Login to \'Demo Shop\'');
  });

  it('canLogin returns just two users', () => {
    const getUsers = userService.getUser();
    expect(getUsers).toContain('stasiek');
    expect(getUsers.length).toEqual(2);
  });

  it('user authorize - check existing user login', () => {
    userService.authorizationUser('stan', 'stan123');
    const token = localStorage.getItem('login');
    expect(token).not.toBeNull();
  });

  it('cannot send request while login and password are invalid', () => {
    const login = document.getElementsByClassName('login-modal__input-panel')[0];
    const password = document.getElementsByClassName('login-modal__input-panel')[1];
    const submitButton = document.getElementsByClassName('login-modal__submit-button')[0].hasAttribute('disabled');
    const isError = login.classList.contains('has-error') || password.classList.contains('has-error');
    if (!isError) {
      expect(submitButton).toBe(true);
    }
  });
});

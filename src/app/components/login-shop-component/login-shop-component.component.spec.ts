import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { LoginShopComponentComponent } from './login-shop-component.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import { UserService } from '../services/user.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

describe('LoginShopComponentComponent', () => {
  let component: LoginShopComponentComponent;
  let fixture: ComponentFixture<LoginShopComponentComponent>;
  const de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginShopComponentComponent ],
      imports: [FormsModule, HttpClientModule, RouterModule, RouterTestingModule],
        providers: [ HttpClient, UserService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginShopComponentComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('display login caption', () => {
    const h2 = de.query(By.css('h2'));
    console.log(de);
    expect(h2.nativeElement.innerText).toBe('Login to \'Demo Shop\'');
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginShopComponentComponent } from './login-shop-component.component';

describe('LoginShopComponentComponent', () => {
  let component: LoginShopComponentComponent;
  let fixture: ComponentFixture<LoginShopComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginShopComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginShopComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

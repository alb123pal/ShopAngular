import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponentComponent } from './product-list-component.component';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

describe('ProductListComponentComponent', () => {
  let component: ProductListComponentComponent;
  let fixture: ComponentFixture<ProductListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListComponentComponent],
        imports: [FormsModule, HttpClientModule, RouterModule, RouterTestingModule, SharedModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

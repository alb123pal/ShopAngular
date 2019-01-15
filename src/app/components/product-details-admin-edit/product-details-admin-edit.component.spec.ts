import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsAdminEditComponent } from './product-details-admin-edit.component';

describe('ProductDetailsAdminEditComponent', () => {
  let component: ProductDetailsAdminEditComponent;
  let fixture: ComponentFixture<ProductDetailsAdminEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailsAdminEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

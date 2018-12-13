import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorServerComponentComponent } from './error-server-component.component';

describe('ErrorServerComponentComponent', () => {
  let component: ErrorServerComponentComponent;
  let fixture: ComponentFixture<ErrorServerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorServerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorServerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

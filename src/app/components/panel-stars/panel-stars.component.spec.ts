import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelStarsComponent } from './panel-stars.component';

describe('PanelStarsComponent', () => {
  let component: PanelStarsComponent;
  let fixture: ComponentFixture<PanelStarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelStarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

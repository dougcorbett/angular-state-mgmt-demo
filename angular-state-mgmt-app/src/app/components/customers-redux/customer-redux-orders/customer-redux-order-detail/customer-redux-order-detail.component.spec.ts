import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReduxOrderDetailComponent } from './customer-redux-order-detail.component';

describe('CustomerReduxOrderDetailComponent', () => {
  let component: CustomerReduxOrderDetailComponent;
  let fixture: ComponentFixture<CustomerReduxOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerReduxOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerReduxOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

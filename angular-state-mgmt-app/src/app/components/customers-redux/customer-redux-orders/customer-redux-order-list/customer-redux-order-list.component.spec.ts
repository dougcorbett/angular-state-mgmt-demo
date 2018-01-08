import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReduxOrderListComponent } from './customer-redux-order-list.component';

describe('CustomerReduxOrderListComponent', () => {
  let component: CustomerReduxOrderListComponent;
  let fixture: ComponentFixture<CustomerReduxOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerReduxOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerReduxOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

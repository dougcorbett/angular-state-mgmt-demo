import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReduxDetailComponent } from './customer-redux-detail.component';

describe('CustomerReduxDetailComponent', () => {
  let component: CustomerReduxDetailComponent;
  let fixture: ComponentFixture<CustomerReduxDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerReduxDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerReduxDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

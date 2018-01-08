import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReduxEditComponent } from './customer-redux-edit.component';

describe('CustomerReduxEditComponent', () => {
  let component: CustomerReduxEditComponent;
  let fixture: ComponentFixture<CustomerReduxEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerReduxEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerReduxEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReduxAddComponent } from './customer-redux-add.component';

describe('CustomerReduxAddComponent', () => {
  let component: CustomerReduxAddComponent;
  let fixture: ComponentFixture<CustomerReduxAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerReduxAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerReduxAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

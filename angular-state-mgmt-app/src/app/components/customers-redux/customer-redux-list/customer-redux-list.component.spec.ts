import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReduxListComponent } from './customer-redux-list.component';

describe('CustomerReduxListComponent', () => {
  let component: CustomerReduxListComponent;
  let fixture: ComponentFixture<CustomerReduxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerReduxListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerReduxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReduxThumbnailComponent } from './customer-redux-thumbnail.component';

describe('CustomerReduxThumbnailComponent', () => {
  let component: CustomerReduxThumbnailComponent;
  let fixture: ComponentFixture<CustomerReduxThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerReduxThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerReduxThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

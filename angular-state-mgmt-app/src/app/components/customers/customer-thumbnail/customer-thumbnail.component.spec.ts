import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerThumbnailComponent } from './customer-thumbnail.component';

describe('CustomerThumbnailComponent', () => {
  let component: CustomerThumbnailComponent;
  let fixture: ComponentFixture<CustomerThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

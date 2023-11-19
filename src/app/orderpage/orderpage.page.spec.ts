import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderpagePage } from './orderpage.page';

describe('OrderpagePage', () => {
  let component: OrderpagePage;
  let fixture: ComponentFixture<OrderpagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OrderpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

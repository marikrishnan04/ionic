import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewCartsPage } from './view-carts.page';

describe('ViewCartsPage', () => {
  let component: ViewCartsPage;
  let fixture: ComponentFixture<ViewCartsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewCartsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditaddressPage } from './editaddress.page';

describe('EditaddressPage', () => {
  let component: EditaddressPage;
  let fixture: ComponentFixture<EditaddressPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditaddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YourhistoryPage } from './yourhistory.page';

describe('YourhistoryPage', () => {
  let component: YourhistoryPage;
  let fixture: ComponentFixture<YourhistoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(YourhistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

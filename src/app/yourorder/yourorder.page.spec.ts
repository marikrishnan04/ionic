import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YourorderPage } from './yourorder.page';

describe('YourorderPage', () => {
  let component: YourorderPage;
  let fixture: ComponentFixture<YourorderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(YourorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

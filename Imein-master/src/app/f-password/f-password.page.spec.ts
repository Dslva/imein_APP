import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FPasswordPage } from './f-password.page';

describe('FPasswordPage', () => {
  let component: FPasswordPage;
  let fixture: ComponentFixture<FPasswordPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

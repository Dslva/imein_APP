import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresarProductoPage } from './ingresar-producto.page';

describe('IngresarProductoPage', () => {
  let component: IngresarProductoPage;
  let fixture: ComponentFixture<IngresarProductoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IngresarProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

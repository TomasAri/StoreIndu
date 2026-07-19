import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreinduCompra } from './storeindu-compra';

describe('StoreinduCompra', () => {
  let component: StoreinduCompra;
  let fixture: ComponentFixture<StoreinduCompra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreinduCompra],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreinduCompra);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

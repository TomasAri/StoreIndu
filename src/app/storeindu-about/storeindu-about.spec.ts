import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreinduAbout } from './storeindu-about';

describe('StoreinduAbout', () => {
  let component: StoreinduAbout;
  let fixture: ComponentFixture<StoreinduAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreinduAbout],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreinduAbout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

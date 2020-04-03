import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartuchoFormComponent } from './cartucho-form.component';

describe('CartuchoFormComponent', () => {
  let component: CartuchoFormComponent;
  let fixture: ComponentFixture<CartuchoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartuchoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartuchoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

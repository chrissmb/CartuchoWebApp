import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartuchoComponent } from './cartucho.component';

describe('CartuchoComponent', () => {
  let component: CartuchoComponent;
  let fixture: ComponentFixture<CartuchoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartuchoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartuchoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

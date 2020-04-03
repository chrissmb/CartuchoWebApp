import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartuchoGridComponent } from './cartucho-grid.component';

describe('CartuchoGridComponent', () => {
  let component: CartuchoGridComponent;
  let fixture: ComponentFixture<CartuchoGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartuchoGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartuchoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

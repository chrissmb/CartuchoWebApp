import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueRegistroComponent } from './estoque-registro.component';

describe('EstoqueRegistroComponent', () => {
  let component: EstoqueRegistroComponent;
  let fixture: ComponentFixture<EstoqueRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstoqueRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstoqueRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

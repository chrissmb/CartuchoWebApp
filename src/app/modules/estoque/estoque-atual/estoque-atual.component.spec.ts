import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueAtualComponent } from './estoque-atual.component';

describe('EstoqueAtualComponent', () => {
  let component: EstoqueAtualComponent;
  let fixture: ComponentFixture<EstoqueAtualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstoqueAtualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstoqueAtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

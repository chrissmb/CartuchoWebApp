import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssyncSpinnerComponent } from './assync-spinner.component';

describe('AssyncSpinnerComponent', () => {
  let component: AssyncSpinnerComponent;
  let fixture: ComponentFixture<AssyncSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssyncSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssyncSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

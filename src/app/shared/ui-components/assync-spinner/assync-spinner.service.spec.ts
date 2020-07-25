import { TestBed } from '@angular/core/testing';

import { AssyncSpinnerService } from './assync-spinner.service';

describe('AssyncSpinnerService', () => {
  let service: AssyncSpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssyncSpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

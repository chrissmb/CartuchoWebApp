import { TestBed } from '@angular/core/testing';

import { CartuchoService } from './cartucho.service';

describe('CartuchoService', () => {
  let service: CartuchoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartuchoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

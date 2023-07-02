import { TestBed } from '@angular/core/testing';

import { BrandSelectionService } from './brand-selection.service';

describe('BrandSelectionService', () => {
  let service: BrandSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

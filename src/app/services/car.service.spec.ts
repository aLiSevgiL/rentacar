import { TestBed } from '@angular/core/testing';

import { CarserviceService } from './car.service';

describe('CarserviceService', () => {
  let service: CarserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

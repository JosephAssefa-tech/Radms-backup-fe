import { TestBed } from '@angular/core/testing';

import { LegalMeasurementService } from './legal-measurement.service';

describe('LegalMeasurementService', () => {
  let service: LegalMeasurementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegalMeasurementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

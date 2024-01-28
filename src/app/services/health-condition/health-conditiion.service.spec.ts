import { TestBed } from '@angular/core/testing';

import { HealthConditiionService } from './health-conditiion.service';

describe('HealthConditiionService', () => {
  let service: HealthConditiionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthConditiionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

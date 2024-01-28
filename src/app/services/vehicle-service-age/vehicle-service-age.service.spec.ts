import { TestBed } from '@angular/core/testing';

import { VehicleServiceAgeService } from './vehicle-service-age.service';

describe('VehicleServiceAgeService', () => {
  let service: VehicleServiceAgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleServiceAgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

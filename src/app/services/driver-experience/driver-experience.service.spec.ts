import { TestBed } from '@angular/core/testing';

import { DriverExperienceService } from './driver-experience.service';

describe('DriverExperienceService', () => {
  let service: DriverExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverExperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

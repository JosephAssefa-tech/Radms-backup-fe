import { TestBed } from '@angular/core/testing';

import { SpeedLimitService } from './speed-limit.service';

describe('SpeedLimitService', () => {
  let service: SpeedLimitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeedLimitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

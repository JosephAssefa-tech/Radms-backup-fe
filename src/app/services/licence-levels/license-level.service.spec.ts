import { TestBed } from '@angular/core/testing';

import { LicenseLevelService } from './license-level.service';

describe('LicenseLevelService', () => {
  let service: LicenseLevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LicenseLevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

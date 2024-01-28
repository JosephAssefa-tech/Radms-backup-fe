import { TestBed } from '@angular/core/testing';

import { LevelOfLicenceService } from './level-of-licence.service';

describe('LevelOfLicenceService', () => {
  let service: LevelOfLicenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LevelOfLicenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

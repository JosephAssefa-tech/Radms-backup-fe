import { TestBed } from '@angular/core/testing';

import { SeverityLevelService } from './severity-level.service';

describe('SeverityLevelService', () => {
  let service: SeverityLevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeverityLevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

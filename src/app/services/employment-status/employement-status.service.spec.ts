import { TestBed } from '@angular/core/testing';

import { EmployementStatusService } from './employement-status.service';

describe('EmployementStatusService', () => {
  let service: EmployementStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployementStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

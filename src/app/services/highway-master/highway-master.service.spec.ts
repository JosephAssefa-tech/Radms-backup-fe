import { TestBed } from '@angular/core/testing';

import { HighwayMasterService } from './highway-master.service';

describe('HighwayMasterService', () => {
  let service: HighwayMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HighwayMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

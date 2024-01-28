import { TestBed } from '@angular/core/testing';

import { HighwayOwnerService } from './highway-owner.service';

describe('HighwayOwnerService', () => {
  let service: HighwayOwnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HighwayOwnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

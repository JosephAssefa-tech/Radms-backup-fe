import { TestBed } from '@angular/core/testing';

import { VechileOwnerService } from './vechile-owner.service';

describe('VechileOwnerService', () => {
  let service: VechileOwnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VechileOwnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

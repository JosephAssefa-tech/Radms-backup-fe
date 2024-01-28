import { TestBed } from '@angular/core/testing';

import { VechileMasterService } from './vechile-master.service';

describe('VechileMasterService', () => {
  let service: VechileMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VechileMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

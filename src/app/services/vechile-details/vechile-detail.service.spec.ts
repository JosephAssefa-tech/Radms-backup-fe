import { TestBed } from '@angular/core/testing';

import { VechileDetailService } from './vechile-detail.service';

describe('VechileDetailService', () => {
  let service: VechileDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VechileDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

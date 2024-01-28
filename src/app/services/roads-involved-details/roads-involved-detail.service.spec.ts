import { TestBed } from '@angular/core/testing';

import { RoadsInvolvedDetailService } from './roads-involved-detail.service';

describe('RoadsInvolvedDetailService', () => {
  let service: RoadsInvolvedDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoadsInvolvedDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

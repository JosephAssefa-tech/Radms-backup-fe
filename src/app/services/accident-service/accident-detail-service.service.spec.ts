import { TestBed } from '@angular/core/testing';

import { AccidentDetailServiceService } from './accident-detail-service.service';

describe('AccidentDetailServiceService', () => {
  let service: AccidentDetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccidentDetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

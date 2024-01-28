import { TestBed } from '@angular/core/testing';

import { VictimDetailService } from './victim-detail.service';

describe('VictimDetailService', () => {
  let service: VictimDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VictimDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

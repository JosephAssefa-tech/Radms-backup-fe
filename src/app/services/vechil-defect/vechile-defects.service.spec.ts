import { TestBed } from '@angular/core/testing';

import { VechileDefectsService } from './vechile-defects.service';

describe('VechileDefectsService', () => {
  let service: VechileDefectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VechileDefectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

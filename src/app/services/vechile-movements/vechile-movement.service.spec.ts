import { TestBed } from '@angular/core/testing';

import { VechileMovementService } from './vechile-movement.service';

describe('VechileMovementService', () => {
  let service: VechileMovementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VechileMovementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

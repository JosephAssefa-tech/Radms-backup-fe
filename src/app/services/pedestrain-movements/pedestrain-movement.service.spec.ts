import { TestBed } from '@angular/core/testing';

import { PedestrainMovementService } from './pedestrain-movement.service';

describe('PedestrainMovementService', () => {
  let service: PedestrainMovementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedestrainMovementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

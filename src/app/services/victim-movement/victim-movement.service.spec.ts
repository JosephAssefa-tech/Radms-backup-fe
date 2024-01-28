import { TestBed } from '@angular/core/testing';

import { VictimMovementService } from './victim-movement.service';

describe('VictimMovementService', () => {
  let service: VictimMovementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VictimMovementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

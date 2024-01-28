import { TestBed } from '@angular/core/testing';

import { VechileRelationService } from './vechile-relation.service';

describe('VechileRelationService', () => {
  let service: VechileRelationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VechileRelationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

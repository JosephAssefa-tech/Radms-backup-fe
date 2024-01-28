import { TestBed } from '@angular/core/testing';

import { RoadSurfaceConditionsService } from './road-surface-conditions.service';

describe('RoadSurfaceConditionsService', () => {
  let service: RoadSurfaceConditionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoadSurfaceConditionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

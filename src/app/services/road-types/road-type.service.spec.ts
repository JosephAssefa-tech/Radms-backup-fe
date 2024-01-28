import { TestBed } from '@angular/core/testing';

import { RoadTypeService } from './road-type.service';

describe('RoadTypeService', () => {
  let service: RoadTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoadTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

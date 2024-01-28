import { TestBed } from '@angular/core/testing';

import { RoadCarriagewayService } from './road-carriageway.service';

describe('RoadCarriagewayService', () => {
  let service: RoadCarriagewayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoadCarriagewayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { HighwayTypeService } from './highway-type.service';

describe('HighwayTypeService', () => {
  let service: HighwayTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HighwayTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

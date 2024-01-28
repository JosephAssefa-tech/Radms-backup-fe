import { TestBed } from '@angular/core/testing';

import { LandmarkTypeService } from './landmark-type.service';

describe('LandmarkTypeService', () => {
  let service: LandmarkTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandmarkTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

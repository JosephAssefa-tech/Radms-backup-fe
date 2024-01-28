import { TestBed } from '@angular/core/testing';

import { SubCityService } from './sub-city.service';

describe('SubCityService', () => {
  let service: SubCityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubCityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

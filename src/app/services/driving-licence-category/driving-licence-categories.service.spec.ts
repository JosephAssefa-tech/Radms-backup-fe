import { TestBed } from '@angular/core/testing';

import { DrivingLicenceCategoriesService } from './driving-licence-categories.service';

describe('DrivingLicenceCategoriesService', () => {
  let service: DrivingLicenceCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrivingLicenceCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

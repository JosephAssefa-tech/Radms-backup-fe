import { TestBed } from '@angular/core/testing';

import { SeatingTypeService } from './seating-type.service';

describe('SeatingTypeService', () => {
  let service: SeatingTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeatingTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

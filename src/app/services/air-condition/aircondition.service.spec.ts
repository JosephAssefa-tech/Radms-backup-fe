import { TestBed } from '@angular/core/testing';

import { AirconditionService } from './aircondition.service';

describe('AirconditionService', () => {
  let service: AirconditionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirconditionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

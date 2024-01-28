import { TestBed } from '@angular/core/testing';

import { WoredaMasterService } from './woreda-master.service';

describe('WoredaMasterService', () => {
  let service: WoredaMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WoredaMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

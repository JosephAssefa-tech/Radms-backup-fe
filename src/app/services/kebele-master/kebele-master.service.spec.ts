import { TestBed } from '@angular/core/testing';

import { KebeleMasterService } from './kebele-master.service';

describe('KebeleMasterService', () => {
  let service: KebeleMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KebeleMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

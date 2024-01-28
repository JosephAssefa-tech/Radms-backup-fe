import { TestBed } from '@angular/core/testing';

import { JunctionTypeService } from './junction-type.service';

describe('JunctionTypeService', () => {
  let service: JunctionTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JunctionTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { VictimTypeService } from './victim-type.service';

describe('VictimTypeService', () => {
  let service: VictimTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VictimTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

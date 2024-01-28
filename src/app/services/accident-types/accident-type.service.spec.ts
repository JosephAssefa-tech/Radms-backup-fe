import { TestBed } from '@angular/core/testing';

import { AccidentTypeService } from './accident-type.service';

describe('AccidentTypeService', () => {
  let service: AccidentTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccidentTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

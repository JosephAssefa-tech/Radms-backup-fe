import { TestBed } from '@angular/core/testing';

import { LightConditionService } from './light-condition.service';

describe('LightConditionService', () => {
  let service: LightConditionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LightConditionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

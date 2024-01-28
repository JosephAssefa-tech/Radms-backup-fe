import { TestBed } from '@angular/core/testing';

import { PavementTypeService } from './pavement-type.service';

describe('PavementTypeService', () => {
  let service: PavementTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PavementTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

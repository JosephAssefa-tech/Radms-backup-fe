import { TestBed } from '@angular/core/testing';

import { TerrianTypeService } from './terrian-type.service';

describe('TerrianTypeService', () => {
  let service: TerrianTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerrianTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

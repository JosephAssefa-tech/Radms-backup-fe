import { TestBed } from '@angular/core/testing';

import { CollisionTypeService } from './collision-type.service';

describe('CollisionTypeService', () => {
  let service: CollisionTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollisionTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

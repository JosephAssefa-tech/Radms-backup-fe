import { TestBed } from '@angular/core/testing';

import { OrganizationMasterService } from './organization-master.service';

describe('OrganizationMasterService', () => {
  let service: OrganizationMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizationMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

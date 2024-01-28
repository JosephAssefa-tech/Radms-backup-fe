import { TestBed } from '@angular/core/testing';

import { AccidentDetailsTransactionService } from './accident-details-transaction.service';

describe('AccidentDetailsTransactionService', () => {
  let service: AccidentDetailsTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccidentDetailsTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

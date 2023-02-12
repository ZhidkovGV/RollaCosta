import { TestBed } from '@angular/core/testing';

import { PrizeModalService } from './prize-modal.service';

describe('PrizeModalService', () => {
  let service: PrizeModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrizeModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

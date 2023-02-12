import { TestBed } from '@angular/core/testing';

import { LootBoxService } from './loot-box.service';

describe('LootBoxService', () => {
  let service: LootBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LootBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

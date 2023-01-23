import { TestBed } from '@angular/core/testing';

import { UtilityBaseService } from './utility-base.service';

describe('UtilityBaseService', () => {
  let service: UtilityBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilityBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

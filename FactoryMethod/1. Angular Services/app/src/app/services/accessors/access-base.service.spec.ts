import { TestBed } from '@angular/core/testing';

import { AccessBaseService } from './access-base.service';

describe('AccessBaseService', () => {
  let service: AccessBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

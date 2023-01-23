import { TestBed } from '@angular/core/testing';

import { ManagerBaseService } from './manager-base.service';

describe('ManagerBaseService', () => {
  let service: ManagerBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

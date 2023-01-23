import { TestBed } from '@angular/core/testing';

import { PlanningManagerService } from './planning-manager.service';

describe('PlanningManagerService', () => {
  let service: PlanningManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanningManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { EngineBaseService } from './engine-base.service';

describe('EngineBaseService', () => {
  let service: EngineBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EngineBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

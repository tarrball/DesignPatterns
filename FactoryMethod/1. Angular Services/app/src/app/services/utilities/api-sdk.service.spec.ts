import { TestBed } from '@angular/core/testing';

import { ApiSdkService } from './api-sdk.service';

describe('ApiSdkService', () => {
  let service: ApiSdkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSdkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

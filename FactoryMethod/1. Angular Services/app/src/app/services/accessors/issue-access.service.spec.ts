import { TestBed } from '@angular/core/testing';

import { IssueAccessService } from './issue-access.service';

describe('IssueAccessService', () => {
  let service: IssueAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssueAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

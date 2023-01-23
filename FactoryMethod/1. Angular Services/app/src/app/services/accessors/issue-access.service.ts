import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import Issue from 'src/app/data-contracts/issues';
import { ApiSdkService } from '../utilities/api-sdk.service';
import { CacheUtilityService } from '../utilities/cache-utility.service';
import { AccessBaseService } from './access-base.service';

@Injectable({
  providedIn: 'root',
})
export class IssueAccessService extends AccessBaseService {
  constructor(private cache: CacheUtilityService, private api: ApiSdkService) {
    super();
  }

  public getIssues(): Observable<Issue[]> {
    if (this.cache.hasKey('issues')) {
      const issues = this.cache.get<Issue[]>('issues');

      return of(issues);
    }

    return this.api.get<Issue[]>('/issues');
  }
}

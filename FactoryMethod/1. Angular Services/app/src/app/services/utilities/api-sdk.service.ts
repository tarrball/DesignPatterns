import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from './config.service';
import { UtilityBaseService } from './utility-base.service';

@Injectable({
  providedIn: 'root',
})
export class ApiSdkService extends UtilityBaseService {
  constructor(private config: ConfigService, private client: HttpClient) {
    super();
  }

  public get<T>(path: string): Observable<T> {
    // TODO 
    // shared logging, error handling, headers
    return this.client.get<T>(`${this.config.apiUrl}${path}`);
  }
}

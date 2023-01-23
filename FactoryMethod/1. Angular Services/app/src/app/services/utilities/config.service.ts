import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { UtilityBaseService } from './utility-base.service';

@Injectable({
  providedIn: 'root',
})
export class ConfigService extends UtilityBaseService {
  constructor() {
    super();
  }

  public isProduction(): boolean {
    return environment.production;
  }

  public apiUrl(): string {
    return environment.apiUrl;
  }
}

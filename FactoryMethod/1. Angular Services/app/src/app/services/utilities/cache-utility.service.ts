import { Injectable } from '@angular/core';

import { UtilityBaseService } from './utility-base.service';

@Injectable({
  providedIn: 'root',
})
export class CacheUtilityService extends UtilityBaseService {
  private cache = new Map<string, any>();

  constructor() {
    super();
  }

  public get<T>(key: string): T {
    if (!this.hasKey(key)) {
      throw new Error(`'${key}' was not found in cache.`);
    }

    const result = this.cache.get(key) as T;

    return result;
  }

  public hasKey(key: string): Boolean {
    const result = this.cache.has(key);

    return result;
  }

  public set(key: string, value: any): void {
    this.cache.set(key, value);
  }
}

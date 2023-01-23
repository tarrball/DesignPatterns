import { TestBed } from '@angular/core/testing';

import { CacheUtilityService } from './cache-utility.service';

describe('CacheUtilityService', () => {
  let service: CacheUtilityService;

  beforeEach(() => {
    service = new CacheUtilityService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('hasKey', () => {
    it('should return true if the item is in the cache', () => {
      service.set('issues', 'cache this');

      expect(service.hasKey('issues')).toBeTrue();
    });

    it('should return false if the item is not in the cache', () => {
      expect(service.hasKey('issues')).toBeFalse();
    });
  });

  describe('set', () => {
    it('should set an item in the cache', () => {
      service.set('issues', 'cache this');

      const result = service.get('issues');

      expect(result).toBe('cache this');
    });

    it('should overwrite an item with the same key in the cache', () => {
      service.set('issues', 'cache this');
      service.set('issues', 'cache that');

      const result = service.get('issues');

      expect(result).toBe('cache that');
    });

    it('should not overwrite items with other keys in the cache', () => {
      service.set('issues1', 'cache this');
      service.set('issues2', 'cache that');

      expect(service.get('issues1')).toBe('cache this');
      expect(service.get('issues2')).toBe('cache that');
    });
  });

  describe('get', () => {
    it('should throw an error if the key does not exist in the cache', () => {
      expect(() => service.get('does not exist')).toThrowError(
        `'does not exist' was not found in cache.`
      );
    });
  });
});

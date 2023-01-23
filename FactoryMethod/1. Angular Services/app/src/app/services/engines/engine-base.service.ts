import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class EngineBaseService extends BaseService {
  constructor() {
    super();
  }
}

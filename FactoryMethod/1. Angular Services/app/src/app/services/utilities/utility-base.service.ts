import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class UtilityBaseService extends BaseService {
  constructor() {
    super();
  }
}

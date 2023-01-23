import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class ManagerBaseService extends BaseService {
  constructor() {
    super();
  }
}

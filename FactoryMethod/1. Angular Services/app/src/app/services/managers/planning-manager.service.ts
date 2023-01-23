import { Injectable } from '@angular/core';
import { ManagerBaseService } from './manager-base.service';

@Injectable({
  providedIn: 'root',
})
export class PlanningManagerService extends ManagerBaseService {
  constructor() {
    super();
  }
}

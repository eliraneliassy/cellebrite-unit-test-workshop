import { MasterService } from './master.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor(private masterService: MasterService) { }

  plus(a, b) {
    const res = a + b;
    this.masterService.logValue(res);
    return res;
  }
}

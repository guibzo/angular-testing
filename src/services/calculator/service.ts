import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CalculatorService {
  sum(x: number, y: number) {
    return x + y;
  }
}

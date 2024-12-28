import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Calculator {
  sum(x: number, y: number) {
    return x + y;
  }
}

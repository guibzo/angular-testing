import { Pipe } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe {
  transform(value: string): string {
    let reverse = '';

    for (let i = value.length - 1; i >= 0; i--) {
      reverse += value[i];
    }

    return reverse;
  }
}

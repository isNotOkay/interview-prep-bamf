import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'period',
})
export class PeriodPipe implements PipeTransform {

  transform(value: unknown): string | null {
    if (typeof value === 'string' || value instanceof String) {
      return `${value}.`;
    }

    return null;
  }

}

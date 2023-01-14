import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: unknown, targetUnits?: string): string | number {
    if (typeof value === 'number' && !isNaN(value)) {
      if (!targetUnits)
        targetUnits = 'k';
      switch (targetUnits) {
        case 'm':
          return 1.609344 * value * 100;
        case 'cm':
          return 1.609344 * value * 100 * 1000;
        case 'k':
          return 1.609344 * value;
        default:
          return 'Please passing the valid targetUnits.';
      }
    }
    return ''
  }
}

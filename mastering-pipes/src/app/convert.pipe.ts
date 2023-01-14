import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): string | number | undefined {
    console.log(args);
    if (!value) return '';
    if (typeof value === 'number' && !isNaN(value)) return 1.609344 * value;
    return undefined;
  }
}

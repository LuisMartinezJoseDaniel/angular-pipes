import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: number, targetUnits: string): number | string {
    if (!value) {
      return '';
    }

    switch (targetUnits) {
      case 'km':
        return value * 1.609;
      case 'm':
        return value * 1.609 * 1000;
      case 'cm':
        return value * 1.609 * 1000 * 1000;
      default:
        throw new Error('Target unit is not supported');
      // return value;
    }
  }
}

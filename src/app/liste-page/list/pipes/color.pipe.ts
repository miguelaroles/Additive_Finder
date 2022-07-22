import { Pipe, PipeTransform } from '@angular/core';

const Legend: string[] = [
  'success',
  'tertiary',
  'warning',
  'danger'];

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {
  transform(value: string): string {
    return Legend[Number(value)] || 'default';
  }
}

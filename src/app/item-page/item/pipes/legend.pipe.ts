import { Pipe, PipeTransform } from '@angular/core';

enum Code {
  success = 'success',
  tertiary = 'tertiary',
  warning = 'warning',
  danger = 'danger'
}

@Pipe({
  name: 'legend'
})
export class LegendPipe implements PipeTransform {
  transform(value: string): string {
    return Code[value as keyof typeof Code] || 'default';
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: string): string {
    let code: string = 'default';

    switch (value){
      case "0":
        code = 'success';
        break;
      case "1":
        code = 'tertiary';
        break;
      case "2":
        code = 'warning';
        break;
      case "3":
        code = 'danger';
        break;
      default:
    }

    return code;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'legend'
})
export class LegendPipe implements PipeTransform {

  transform(value: string): string {
    let code: string = 'default';

    switch (value){
      case "0":
        code = 'acceptable';
        break;
      case "1":
        code = 'à éviter';
        break;
      case "2":
        code = 'contreversé';
        break;
      case "3":
        code = 'danger';
        break;
      default:
    }

    return code;
  }

}

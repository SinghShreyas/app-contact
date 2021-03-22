import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letter'
})
export class LetterPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
      if (!value) { return ''; }
      return value[0].toUpperCase();
  }

}

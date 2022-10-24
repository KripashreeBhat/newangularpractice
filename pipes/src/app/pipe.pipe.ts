import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',

})
export class PipePipe implements PipeTransform {
  nvalue!: string;
  transform(value: any): any {

  // transform(value: unknown, ...args: unknown[]): unknown {
    this.nvalue = value.split('').reverse().join('');
    return this.nvalue;
  }
}



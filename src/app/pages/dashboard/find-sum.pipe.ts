import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findSum'
})
export class FindSumPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): number {
    return value.x + value.y;
  }

}

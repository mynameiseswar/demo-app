import { Pipe, PipeTransform } from '@angular/core';
import { MathObject } from '../pages/dashboard/dashboard.component';

@Pipe({
  name: 'mathOperations',
  pure: true
})
export class MathOperationsPipe implements PipeTransform {

  transform(value: MathObject, ...args: string[]): number  {

    console.log(value, args);

    const operationType: string = args[0] || 'sum';

    let returnValue: any;

    switch(operationType.toLowerCase().trim()){
      case 'sum':
        returnValue = (value.x || 0) + (value.y || 0);
        break;
      case 'sub':
        returnValue = (value.x || 0) - (value.y || 0);
        break;
      case 'multi':
        returnValue = (value.x || 0) * (value.y || 0);
        break;
      case 'div':
        returnValue = (value.x || 0) / (value.y || 0);
        break;
    }

    return returnValue;
  }

}

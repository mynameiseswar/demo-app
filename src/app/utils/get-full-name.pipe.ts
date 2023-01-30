import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getFullName'
})
export class GetFullNamePipe implements PipeTransform {

  transform(value: any, ...args: any[]): string {
    const target = args[0] || 'UpperCase';
    let returnString  = (`${value.fName} ${value.lName}`) ;
    switch(target.toLowerCase()){
      case 'uppercase':
        returnString = returnString.toUpperCase();
        break;
      case 'lowercase':
        returnString = returnString.toLowerCase();
        break;
      default:
        // returnStinrg = (`${value.fName} ${value.lName}`).toUpperCase();
        break;
    }
    return returnString;
  }

}

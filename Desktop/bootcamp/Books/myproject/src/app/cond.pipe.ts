import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cond'
})
export class CondPipe implements PipeTransform {

  transform(value: any, filterCond : string, propName : string): any {
    
    if(value.length == 0 || filterCond === '' || filterCond == null || filterCond === 'None'){
      return value;
    }
    const resultArray = [];
    for(const item of value){
      if(item[propName]==filterCond){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}

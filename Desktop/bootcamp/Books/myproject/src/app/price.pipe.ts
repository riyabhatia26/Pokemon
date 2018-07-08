import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: any, filterMin : string, propName : string): any {
    
    if(value.length == 0 || filterMin === '' || filterMin == null || filterMin === 'Min price'){
      return value;
    }
    const resultArray = [];
    for(const item of value){
      if(item[propName]>filterMin){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}

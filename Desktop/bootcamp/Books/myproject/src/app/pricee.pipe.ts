import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricee'
})
export class PriceePipe implements PipeTransform {

  transform(value: any, filterMax : string, propName : string): any {
    
    if(value.length == 0 || filterMax === '' || filterMax == null || filterMax === 'Max price'){
      return value;
    }
    const resultArray = [];
    for(const item of value){
      if(item[propName]<filterMax){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}

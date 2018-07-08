import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value: any, filterName : string, propName : string): any {

    if(value.length == 0 || filterName === '' || filterName == null){
      return value;
    }
    const resultArray = [];
    for(const item of value){
      if(item[propName]==filterName){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}

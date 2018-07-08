import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'author'
})
export class AuthorPipe implements PipeTransform {

  transform(value: any, filterAuthor : string, propName : string): any {

    if(value.length == 0 || filterAuthor === '' || filterAuthor == null){
      return value;
    }
    const resultArray = [];
    for(const item of value){
      if(item[propName]==filterAuthor){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}

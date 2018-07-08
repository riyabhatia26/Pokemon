import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sent'
})
export class SentPipe implements PipeTransform {

  transform(value: any, id : string): any {
    
    const resultArray = [];
    for(const item of value){
      if(item[id]==localStorage.getItem('currentuid')){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}

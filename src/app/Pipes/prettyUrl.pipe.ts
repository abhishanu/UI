import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({
  name: 'url'
})

export class PrettyUrlPipe implements PipeTransform {
  transform(key) {
    return this.removeComma(this.removeSpaces(key));
  }

  private removeSpaces(key){
    return key.split(" ").join("-");
  }
  
  private removeComma(key){
    return key.split(",").join("-");
  }

  private addSpaces(key){
    return key.split("-").join(" ");
  }
}


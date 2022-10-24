import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'detailpipe'
})
export class DetailPipe implements PipeTransform {

  transform(detail :any,id:any,name:any,Dob :any): any {
  return detail + ': ' + 'id =' + id + '. Name is : ' + name + '. Birthday is on: ' + Dob + '.';
  }

}

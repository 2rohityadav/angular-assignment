import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'orderby', pure: false })

export class OrderbyPipe implements PipeTransform {

  transform(studentDetails: any[], name: string): any[]  {

    studentDetails.sort((a: any, b: any) => {

      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
    return studentDetails;
  }
}

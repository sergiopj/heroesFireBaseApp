import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
  pure: false // must be aware of the change cycle that makes angular
})
export class KeysPipe implements PipeTransform {

  transform(fireBaseObject: any): any {

    const keys = [];

    // this pipe transforms the object of firebase objects into an iterable array
    for (const key in fireBaseObject) {
      if (fireBaseObject.hasOwnProperty(key)) {
         keys.push(key);
      }
    }

    return keys;
  }

}

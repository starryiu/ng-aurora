import { Pipe, PipeTransform } from '@angular/core';
import { isEmpty as __isEmpty } from 'lodash';

@Pipe({
  name: 'isEmpty',
})
export class IsEmptyPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return !__isEmpty(value);
  }
}

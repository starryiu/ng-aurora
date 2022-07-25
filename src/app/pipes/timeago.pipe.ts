import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'timeago.js';

@Pipe({
  name: 'timeago',
})
export class TimeagoPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return format(value, 'zh_CN').replace(/\s/, '');
  }
}

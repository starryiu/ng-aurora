import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pixivFormat',
})
export class PixivFormatPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return ['Pixiv: ', 'Pixiv:'].includes(value) ? '' : value;
  }
}

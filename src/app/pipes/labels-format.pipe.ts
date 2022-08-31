import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'labelsFormat',
})
export class LabelsFormatPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): string {
    const _tmp = value.map((label: any) => label.name).join(' ');
    return _tmp || '无标签';
  }
}

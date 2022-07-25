import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { marked } from 'marked';

marked.setOptions({
  // @ts-ignore
  highlight: (code) => hljs.highlightAuto(code).value,
});

@Pipe({
  name: 'marked',
})
export class MarkedPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return this.sanitizer.bypassSecurityTrustHtml(marked.parse(value));
  }

  constructor(private sanitizer: DomSanitizer) {}
}

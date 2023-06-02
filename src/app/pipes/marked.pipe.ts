import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { marked } from 'marked';

const renderer = {
  // 图片处理
  image: (href: string, title: string | null, text: string | null) => {
    return `<div><img class="article-image" src="${href}" alt="${text}"></div>`;
  },
};
marked.setOptions({
  // @ts-ignore
  highlight: (code) => hljs.highlightAuto(code).value,
});
// @ts-ignore
marked.use({ renderer });

@Pipe({
  name: 'marked',
})
export class MarkedPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return this.sanitizer.bypassSecurityTrustHtml(marked.parse(value));
  }

  constructor(private sanitizer: DomSanitizer) {}
}

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { marked } from 'marked';

const renderer = {
  // 图片处理
  image: (href: string, title: string | null, text: string | null) => {
    return `<div class="article-image-box">
      <img class="article-image" src="${href}" alt="${text}">
      <span class="article-image-loading"">
          <div class="loader21 loader">
            <div class="loader-21">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
      </span>
    </div>`;
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

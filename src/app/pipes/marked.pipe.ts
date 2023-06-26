import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { marked } from 'marked';

const renderer = {
  // 图片处理
  image: (href: string, title: string | null, text: string | null) => {
    return `<div class="article-image-box">
      <img class="article-image" src="${href}" alt="${text}">
      <span class="article-image-loading">
        <div class="wave-loading">
            <span style="--time:1">L</span>
            <span style="--time:2">o</span>
            <span style="--time:3">a</span>
            <span style="--time:4">d</span>
            <span style="--time:5">i</span>
            <span style="--time:6">n</span>
            <span style="--time:7">g</span>
            <span style="--time:8">.</span>
            <span style="--time:9">.</span>
            <span style="--time:10">.</span>
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

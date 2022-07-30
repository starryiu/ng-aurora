import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { sample as __sample } from 'lodash';
import { Observable } from 'rxjs';
import { ArticleInfo, LoadImageType } from './type';
import __config from '../../config';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  private themes: any = {
    asoul: '.gif',
    gelbooru: '.gif',
    'gelbooru-h': '.png',
    moebooru: '.gif',
    'moebooru-h': '.png',
    rule34: '.gif',
  };

  private createOneImageSrc = (num: number, theme: string, rootUrl: string) => {
    (num < 0 || num >= 10) &&
      console.error('数字取值范围应该为 0~9 之间的整数');
    return `${rootUrl}/${theme}/${num}${this.themes[theme]}`;
  };

  /**
   * @param {Object} config
   * @param {number} config.number - 数字.
   * @param {string} config.theme - 可选 ['asoul','gelbooru','gelbooru-h','moebooru','moebooru-h','rule34'].
   * @param {number} config.length - 长度.
   * @param {string} config.rootUrl - 根 url,通常不需要改，除非比 jsdelivr 更快。
   * @returns {[]}
   */
  createImageSrc = (config: any) => {
    let numberArr = String(config.number).split('');
    let len = config.length ? config.length : numberArr.length;
    let theme = config.theme ? config.theme : 'asoul';
    let rootUrl = config.rootUrl
      ? config.rootUrl
      : '//fastly.jsdelivr.net/gh/journey-ad/Moe-counter@master/assets/theme';
    len &&
      (len <= 0 || len > 10) &&
      console.error('长度取值范围应该为 1~10之间的整数');
    !this.themes[theme] && console.error('未找到相应主题');
    const src = [];
    for (let i = 0; i < len; i++) {
      if (numberArr[i]) {
        src.push(this.createOneImageSrc(Number(numberArr[i]), theme, rootUrl));
      } else {
        src.unshift(this.createOneImageSrc(0, theme, rootUrl));
      }
    }
    return src;
  };

  //获取图标
  getIconPark(value: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

  /**
   * 通过 body 获取图片和描述
   */
  regex = /^(.+)?\r\n\s*(.+)?\r\n/;
  coverRegex = /^\[(.+)\].*(http.*(?:jpg|jpeg|png|gif))/;
  formatPost = (body: string) => {
    const result: any = this.regex.exec(body);
    const cover: any = this.coverRegex.exec(result[1]);
    const __body: ArticleInfo = {
      title: cover[1],
      src: cover[2],
      description: result[2],
    };
    return __body;
  };

  /**
   * 格式化歌单 & 友链 & 关于
   */
  formatPage = (data: any, type: string) => {
    if (!data || !data.body) return [];
    let section = data.body.split('## ').filter((o: any) => o.length);

    switch (type) {
      case 'resource':
      case 'friend':
        section = section.map((o: any) => {
          const content = o.split('\r\n').filter((o: any) => o.length);
          const result: any = {};
          content.forEach((row: any, index: any) => {
            if (index === 0) {
              result.name = row;
            } else {
              const inx = row.indexOf(':');
              const key = row.slice(0, inx);
              const value = row.slice(inx + 1);
              result[key] = value;
            }
          });
          return result;
        });
        break;
      case 'about':
        section = section.map((o: any) => {
          const title = o.match(/.+?\r\n/)[0];
          return {
            title,
            content: o.slice(title.length),
          };
        });
        break;
      default:
        break;
    }
    // 移除首尾空格
    section.forEach((item: any) => {
      Object.keys(item).forEach((k) => {
        item[k] = item[k].trim();
      });
    });

    return section;
  };

  getRandomColor(): string {
    const { themeColors } = __config;
    return __sample(themeColors) as string;
  }

  //滚动到顶部
  // @ts-ignore
  scroll = new SmoothScroll();
  backTop() {
    this.scroll.animateScroll(0, null, {
      speed: 600,
      speedAsDuration: true,
    });
  }

  //加载图片
  loadImage(imageUrl: string) {
    return new Observable<LoadImageType>((observer) => {
      let img: HTMLImageElement | null = new Image();
      img.src = imageUrl;
      img.onload = () => {
        img = null;
        observer.next({
          loadStatus: true,
          loadMessage: 'success',
          imageUrl,
        });
        observer.complete();
      };
      img.onerror = () => {
        img = null;
        observer.next({
          loadStatus: true,
          loadMessage: 'error',
          imageUrl,
        });
        observer.complete();
      };
    });
  }

  constructor(private sanitizer: DomSanitizer) {}
}

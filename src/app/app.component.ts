import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { timeout, forkJoin, timer } from 'rxjs';
import { UtilsService } from './shared/utils.service';
import __config from '../config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements AfterViewInit {
  constructor(private utilsService: UtilsService) {}

  showSite = false;
  private readonly previewImages = [
    __config.images.defaultCover,
    __config.images.loadingCover,
    __config.images.avatar,
    __config.images.bg.preview.school,
    __config.images.bg.preview.touhou,
    __config.images.sakura,
    __config.images.backTopCover,
  ];

  private loadSiteFont = () => {
    return new Promise<{ status: string; msg: string }>((resolve) => {
      if (window.FontFace) {
        const fontFile = new FontFace(
          'CangErFeiBaiW02',
          'url(assets/font/仓耳非白/仓耳非白W02.ttf)',
        );
        fontFile
          .load()
          .then(() => {
            resolve({
              status: 'success',
              msg: '网站字体加载成功！！！',
            });
          })
          .catch(() => {
            resolve({
              status: 'error',
              msg: '网站标题字体加载失败',
            });
          });
      } else {
        resolve({
          status: 'error',
          msg: '浏览器不支持 FontFace',
        });
      }
    });
  };
  ngAfterViewInit(): void {
    this.utilsService.resetSiteTitle();
    this.utilsService.addMetaTag({
      name: 'author',
      content: __config.siteInfo.siteTitle,
    });
    this.utilsService.addMetaTag({
      name: 'description',
      content: __config.siteInfo.siteSubTitle,
    });
    this.utilsService.addMetaTag({
      name: 'keywords',
      content: __config.siteInfo.keywords,
    });

    window.onload = () => {
      const preImages$ = this.previewImages.map((previewImage) =>
        this.utilsService.loadImage(previewImage),
      );
      forkJoin(preImages$)
        .pipe(timeout(8000))
        .subscribe({
          next(value) {
            if (
              value.every((imgStatus) => imgStatus.loadMessage === 'success')
            ) {
              console.log('预加载图片成功！！！');
            } else {
              console.error('预加载图片失败');
            }
          },
          error() {
            console.error('预加载图片失败，超时！');
          },
          complete: async () => {
            const loadSiteFontResult = await this.loadSiteFont();
            timer(500).subscribe(() => {
              console.log(loadSiteFontResult.msg);
              this.showSite = true;
            });
          },
        });
    };
  }
}

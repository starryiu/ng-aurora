import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, EffectFade, Lazy } from 'swiper';
import __config from '../../../config';
import { StoreService } from '../../shared/store.service';
import { Theme } from '../../shared/type';
import { Observable, concat } from 'rxjs';

SwiperCore.use([EffectFade, Autoplay, Lazy]);

@Component({
  selector: 'app-starryiu-bg',
  templateUrl: './starryiu-bg.component.html',
  styleUrls: ['./starryiu-bg.component.scss'],
})
export class StarryiuBgComponent implements OnInit {
  touhouImages: string[] = [];
  schoolImages: string[] = [];
  theme: Theme = Theme.touhou;
  swiperDelay = 8000;

  constructor(private storeService: StoreService) {}

  clientType!: string;
  ngOnInit(): void {
    this.storeService.clientType$.subscribe((type) => {
      this.clientType = type;
    });

    this.storeService.themeSwiper$.subscribe((value) => {
      this.theme = value;
    });
    let theme = JSON.parse(localStorage.getItem('theme') as string);
    theme && this.storeService.changeThemeSwiperSource(theme);

    const { images } = __config;
    this.loadImages(images.bg.touhou).subscribe((data: any) => {
      this.touhouImages.push(data.imageUrl);
    });
    this.loadImages(images.bg.school).subscribe((data: any) => {
      this.schoolImages.push(data.imageUrl);
    });
  }

  loadImages(imagesUrl: string[]) {
    return concat(...imagesUrl.map((url) => this.loadImage(url)));
  }

  loadImage(imageUrl: string) {
    return new Observable((observer) => {
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
}

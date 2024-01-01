import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, EffectFade, Lazy } from 'swiper';
import { random as __random } from 'lodash-es';
import __config from '../../../config';
import { StoreService } from '../../shared/store.service';
import { Theme } from '../../shared/type';

SwiperCore.use([EffectFade, Autoplay, Lazy]);

@Component({
  selector: 'app-starryiu-bg',
  templateUrl: './starryiu-bg.component.html',
  styleUrls: ['./starryiu-bg.component.scss'],
})
export class StarryiuBgComponent implements OnInit {
  touhouImages: string[] = __config.images.bg.touhou;
  schoolImages: string[] = __config.images.bg.school;
  theme: Theme = Theme.touhou;
  swiperDelay = 8000;

  constructor(private storeService: StoreService) {}

  clientType!: string;
  initialSlide!: number;
  ngOnInit(): void {
    this.storeService.clientType$.subscribe((type) => {
      this.clientType = type;
    });
    this.storeService.themeSwiper$.subscribe((value) => {
      this.theme = value;
      this.initialSlide =
        this.theme === 0
          ? __random(0, this.touhouImages.length)
          : __random(0, this.schoolImages.length);
    });
    let theme = JSON.parse(localStorage.getItem('theme') as string);
    theme && this.storeService.changeThemeSwiperSource(theme);
  }
}

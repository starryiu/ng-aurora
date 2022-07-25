import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, EffectFade, Lazy } from 'swiper';
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
  touhouImages: string[] = [];
  schoolImages: string[] = [];
  theme: Theme = Theme.touhou;

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    let theme = JSON.parse(localStorage.getItem('theme') as string);
    theme && this.storeService.changeThemeSwiperSource(theme);

    const { images } = __config;
    this.touhouImages = images.bg.touhou;
    this.schoolImages = images.bg.school;
    this.storeService.themeSwiper$.subscribe((value) => {
      this.theme = value;
    });
  }
}

import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import __config from '../../../config';
import { Theme } from '../../shared/type';
import { StoreService } from '../../shared/store.service';

@Component({
  selector: 'app-starryiu-panel',
  templateUrl: './starryiu-panel.component.html',
  styleUrls: ['./starryiu-panel.component.scss'],
  animations: [
    trigger('openFade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('0.15s', style({ opacity: 0 }))]),
    ]),
    trigger('openPanel', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('0.4s', style({ transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('0.25s', style({ transform: 'translateY(-100%)' })),
      ]),
    ]),
  ],
})
export class StarryiuPanelComponent implements OnInit {
  open = false;
  selectTheme = Theme.touhou;
  themeData = [
    {
      title: '千年幻想',
      theme: Theme.touhou,
      cover: __config.images.bg.preview.touhou,
    },
    {
      title: '琉璃の空',
      theme: Theme.school,
      cover: __config.images.bg.preview.school,
    },
  ];
  changeOpen(value: boolean) {
    this.open = value;
  }
  changeTheme(theme: number) {
    localStorage.setItem('theme', JSON.stringify(theme));
    this.storeService.changeThemeSwiperSource(theme);
  }

  constructor(private storeService: StoreService) {}

  modeTheme = localStorage['mode-theme'] ?? 'light';
  changeModeTheme() {
    if (localStorage['mode-theme'] !== 'dark') {
      document.documentElement.classList.add('dark');
      localStorage['mode-theme'] = 'dark';
      this.modeTheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage['mode-theme'] = 'light';
      this.modeTheme = 'light';
    }
  }

  type!: string;
  ngOnInit(): void {
    this.storeService.themeSwiper$.subscribe((value) => {
      this.selectTheme = value;
    });

    this.storeService.clientType$.subscribe((type) => {
      this.type = type;
    });
  }
}

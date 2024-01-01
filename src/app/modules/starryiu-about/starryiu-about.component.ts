import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { Cat, Sleaves } from '@icon-park/svg';
import { UtilsService } from '../../shared/utils.service';
import { ApiService } from '../../shared/api.service';
import { About } from '../../shared/type';
import { StoreService } from 'src/app/shared/store.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-starryiu-about',
  templateUrl: './starryiu-about.component.html',
  styleUrls: ['./starryiu-about.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StarryiuAboutComponent implements OnInit {
  about: About[] = [];
  catIcon: SafeHtml = this.utilsService.getIconPark(
    Cat({ theme: 'outline', size: '1.1em' }),
  );
  slavesIcon: SafeHtml = this.utilsService.getIconPark(
    Sleaves({ theme: 'outline' }),
  );

  countImages: string[] = [];
  showCount = false;
  createMoeCount() {
    const days = Math.floor(
      (Date.now() - Date.parse('2020/10/3 00:00')) / 86400000,
    );
    this.countImages = this.utilsService.createImageSrc({
      number: days,
      theme: 'rule34',
    });
    const countImages$ = this.countImages.map((countImage) =>
      this.utilsService.loadImage(countImage),
    );
    forkJoin(countImages$).subscribe({
      next: (value) => {
        if (value.every((imgStatus) => (imgStatus.loadMessage = 'success'))) {
          this.showCount = true;
        } else {
          console.error('时间计时器图片加载失败');
        }
      },
    });
  }

  changeModeTheme() {
    if (localStorage['mode-theme'] !== 'dark') {
      document.documentElement.classList.add('dark');
      localStorage['mode-theme'] = 'dark';
      this.storeService.changeModeThemeSource('dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage['mode-theme'] = 'light';
      this.storeService.changeModeThemeSource('light');
    }
  }
  constructor(
    private utilsService: UtilsService,
    private apiService: ApiService,
    private storeService: StoreService,
  ) {}

  ngOnInit(): void {
    this.createMoeCount();
    this.apiService.getAbout().subscribe((about) => {
      this.about = about;
    });
  }
}

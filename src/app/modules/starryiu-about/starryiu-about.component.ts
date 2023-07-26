import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { Cat, Sleaves } from '@icon-park/svg';
import { UtilsService } from '../../shared/utils.service';
import { ApiService } from '../../shared/api.service';
import { About } from '../../shared/type';

@Component({
  selector: 'app-starryiu-about',
  templateUrl: './starryiu-about.component.html',
  styleUrls: ['./starryiu-about.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StarryiuAboutComponent implements OnInit {
  countImages: string[] = [];
  about: About[] = [];
  catIcon: SafeHtml = this.utilsService.getIconPark(
    Cat({ theme: 'outline', size: '1.1em' })
  );
  sleavesIcon: SafeHtml = this.utilsService.getIconPark(
    Sleaves({ theme: 'outline' })
  );

  createMoeCount() {
    const days = Math.floor(
      (Date.now() - Date.parse('2020/10/3 00:00')) / 86400000
    );
    this.countImages = this.utilsService.createImageSrc({
      number: days,
      theme: 'rule34',
    });
  }

  changeModeTheme() {
    if (localStorage['mode-theme'] !== 'dark') {
      document.documentElement.classList.add('dark');
      localStorage['mode-theme'] = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage['mode-theme'] = 'light';
    }
  }
  constructor(
    private utilsService: UtilsService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.createMoeCount();
    this.apiService.getAbout().subscribe((about) => {
      this.about = about;
    });
  }
}

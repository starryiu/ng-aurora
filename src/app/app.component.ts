import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
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
      this.showSite = true;
    };
  }
}

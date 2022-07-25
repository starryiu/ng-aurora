import { Component, OnInit } from '@angular/core';
import { throttle as __throttle } from 'lodash';
import { UtilsService } from '../../shared/utils.service';
import { StoreService } from '../../shared/store.service';

@Component({
  selector: 'app-starryiu-backtop',
  templateUrl: './starryiu-backtop.component.html',
  styleUrls: ['./starryiu-backtop.component.scss'],
})
export class StarryiuBacktopComponent implements OnInit {
  scrollTop: number = 0;

  getScrollTop = __throttle(() => {
    this.scrollTop =
      document.documentElement.scrollTop ||
      window.pageYOffset ||
      document.body.scrollTop;
  }, 300);

  backTop() {
    this.utilsService.backTop();
  }

  constructor(
    private utilsService: UtilsService,
    private storeService: StoreService
  ) {}

  type!: string;
  ngOnInit(): void {
    this.getScrollTop();
    window.addEventListener('scroll', () => {
      this.getScrollTop();
    });

    this.storeService.clientType$.subscribe((type) => {
      this.type = type;
    });
  }
}

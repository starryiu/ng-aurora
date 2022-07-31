import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from '../../shared/store.service';
import { throttle as __throttle } from 'lodash';

@Component({
  selector: 'app-header-progress',
  templateUrl: './header-progress.component.html',
  styleUrls: ['./header-progress.component.scss'],
})
export class HeaderProgressComponent implements OnInit, OnDestroy {
  changePercent = __throttle(() => {
    this.percent = Math.round(
      (Math.floor(window.scrollY) /
        (document.documentElement.offsetHeight - window.innerHeight)) *
        100
    );
  }, 300);

  constructor(private storeService: StoreService) {}

  type!: string;
  percent: number = 0;
  ngOnInit(): void {
    this.storeService.clientType$.subscribe((type) => {
      this.type = type;
    });

    this.changePercent();
    window.addEventListener('scroll', this.changePercent);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.changePercent);
  }
}

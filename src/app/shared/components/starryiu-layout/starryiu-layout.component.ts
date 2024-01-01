import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { throttle as __throttle } from 'lodash-es';
import { routeFadeAnimation } from './animations';
import { StoreService } from '../../store.service';

@Component({
  selector: 'app-starryiu-layout',
  templateUrl: './starryiu-layout.component.html',
  styleUrls: ['./starryiu-layout.component.scss'],
  animations: [routeFadeAnimation],
})
export class StarryiuLayoutComponent implements OnInit {
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }

  constructor(
    private contexts: ChildrenOutletContexts,
    private storeService: StoreService,
  ) {}

  watchWindowWidth = __throttle(() => {
    let type = document.body.clientWidth > 876 ? 'PC' : 'Mobile';
    this.storeService.changeClientTypeSource(type);
  }, 300);
  ngOnInit(): void {
    this.watchWindowWidth();
    window.addEventListener('resize', this.watchWindowWidth);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { UtilsService } from '../../shared/utils.service';

@Component({
  selector: 'app-starryiu-cover',
  templateUrl: './starryiu-cover.component.html',
  styleUrls: ['./starryiu-cover.component.scss'],
  animations: [
    trigger('openFade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('0.15s', style({ opacity: 0 }))]),
    ]),
  ],
})
export class StarryiuCoverComponent implements OnInit {
  @Input() imageUrl: string = '';
  loadedImage = false;
  defaultImageUrl =
    'https://fastly.jsdelivr.net/gh/chanshiyucx/yoi/bg/defaultCover.jpg';

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
    //加载图片
    this.utilsService.loadImage(this.imageUrl).subscribe((value) => {
      this.loadedImage = value.loadStatus;
    });
  }
}

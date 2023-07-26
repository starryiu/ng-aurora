import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import 'giscus';

@Component({
  selector: 'app-starryiu-comment',
  templateUrl: './starryiu-comment.component.html',
  styleUrls: ['./starryiu-comment.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StarryiuCommentComponent implements OnInit {
  constructor() {}
  theme = '';
  ngOnInit(): void {
    if (localStorage['mode-theme'] === 'light') {
      this.theme =
        'https://fastly.jsdelivr.net/gh/starryiu/ng-aurora@master/src/assets/custom-giscus.css';
    } else {
      this.theme =
        'https://fastly.jsdelivr.net/gh/starryiu/ng-aurora@master/src/assets/dark-giscus.css';
    }
  }
}

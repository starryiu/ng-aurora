import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starryiu-header',
  templateUrl: './starryiu-header.component.html',
  styleUrls: ['./starryiu-header.component.scss'],
})
export class StarryiuHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    if (localStorage['mode-theme'] === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}

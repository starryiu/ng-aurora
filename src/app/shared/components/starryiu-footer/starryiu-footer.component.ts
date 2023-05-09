import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starryiu-footer',
  templateUrl: './starryiu-footer.component.html',
  styleUrls: ['./starryiu-footer.component.scss'],
})
export class StarryiuFooterComponent implements OnInit {
  constructor() {}

  nowYear = 0;

  ngOnInit(): void {
    this.nowYear = new Date().getFullYear();
  }
}

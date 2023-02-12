import { AfterViewInit, Component, OnInit } from '@angular/core';
//@ts-ignore
import Snow from 'snowjs';

@Component({
  selector: 'app-starryiu-snow',
  templateUrl: './starryiu-snow.component.html',
  styleUrls: ['./starryiu-snow.component.scss'],
})
export class StarryiuSnowComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    const snow = new Snow(
      'Snow',
      window.innerWidth,
      window.innerHeight,
      100,
      3.2,
      4.6,
      0.4,
      0.7
    );
    snow.start();
  }
}

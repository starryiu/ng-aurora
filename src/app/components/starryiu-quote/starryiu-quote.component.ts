import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-starryiu-quote',
  templateUrl: './starryiu-quote.component.html',
  styleUrls: ['./starryiu-quote.component.scss'],
})
export class StarryiuQuoteComponent implements OnInit {
  @Input() subTitle: string = '華枝春滿 天心月圓';

  constructor() {}

  ngOnInit(): void {}
}

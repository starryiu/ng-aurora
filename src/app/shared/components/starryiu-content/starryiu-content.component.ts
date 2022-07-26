import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-starryiu-content',
  templateUrl: './starryiu-content.component.html',
  styleUrls: ['./starryiu-content.component.scss'],
})
export class StarryiuContentComponent implements OnInit {
  @Input() transparent = false;

  constructor() {}

  ngOnInit(): void {}
}

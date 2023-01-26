import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { UtilsService } from '../../shared/utils.service';

@Component({
  selector: 'app-starryiu-segment',
  templateUrl: './starryiu-segment.component.html',
  styleUrls: ['./starryiu-segment.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StarryiuSegmentComponent implements OnInit {
  @Input() body: string = '';
  @Input() title: string | null = '';

  color!: string;

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.color = this.utilsService.getRandomColor();
  }
}

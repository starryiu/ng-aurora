import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import 'giscus';
import { StoreService } from 'src/app/shared/store.service';

@Component({
  selector: 'app-starryiu-comment',
  templateUrl: './starryiu-comment.component.html',
  styleUrls: ['./starryiu-comment.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StarryiuCommentComponent implements OnInit {
  constructor(private storeService: StoreService) {}

  modeTheme = '';
  ngOnInit(): void {
    this.storeService.modeTheme$.subscribe((value) => {
      this.modeTheme = value;
    });
  }
}

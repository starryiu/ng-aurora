import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-starryiu-waline',
  templateUrl: './starryiu-waline.component.html',
  styleUrls: ['./starryiu-waline.component.scss'],
})
export class StarryiuWalineComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() path = 'unknown';
  @ViewChild('walineComment') walineComment!: any;
  constructor() {}

  ngOnInit(): void {}
  aboutWaline!: any;
  ngAfterViewInit() {
    // @ts-ignore
    this.aboutWaline = Waline.init({
      el: this.walineComment.nativeElement,
      serverURL: 'https://waline-test-iz0f3ze0o-starryiu.vercel.app/',
      path: this.path,
      login: 'disable',
      requiredMeta: ['nick', 'mail'],
      wordLimit: 1000,
    });
  }
  ngOnDestroy() {
    this.aboutWaline && this.aboutWaline.destroy();
  }
}

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
  walineInstance!: any;
  ngAfterViewInit() {
    // @ts-ignore
    this.walineInstance = Waline.init({
      el: this.walineComment.nativeElement,
      serverURL: 'https://waline-test-iz0f3ze0o-starryiu.vercel.app/',
      path: this.path,
      requiredMeta: ['nick', 'mail'],
      wordLimit: 200,
    });
  }
  ngOnDestroy() {
    this.walineInstance && this.walineInstance.destroy();
  }
}

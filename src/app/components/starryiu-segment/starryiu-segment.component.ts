import {
  Component,
  ViewEncapsulation,
  Input,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
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

  /**
   * 文章图片预览
   */
  @ViewChild('segmentBody') segmentBodyRef!: ElementRef;
  gallery!: any;
  ngAfterViewInit(): void {
    //@ts-ignore
    this.gallery = new Viewer(this.segmentBodyRef.nativeElement);
  }
  ngOnDestroy(): void {
    this.gallery = null;
  }
}

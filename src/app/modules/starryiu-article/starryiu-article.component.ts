import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalendarDot, Tag, BookmarkOne } from '@icon-park/svg';
import { UtilsService } from '../../shared/utils.service';
import { Article } from '../../shared/type';

@Component({
  selector: 'app-starryiu-article',
  templateUrl: './starryiu-article.component.html',
  styleUrls: ['./starryiu-article.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StarryiuArticleComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  article!: Article;
  calendarIcon = this.utilsService.getIconPark(CalendarDot({}));
  tagIcon = this.utilsService.getIconPark(Tag({}));
  bookmarkOneIcon = this.utilsService.getIconPark(BookmarkOne({}));

  constructor(
    private utilsService: UtilsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.article = data?.article;
      this.utilsService.backTop();
    });
  }

  /**
   * 文章图片预览
   */
  @ViewChild('articleBody') articleBodyRef!: ElementRef;
  gallery!: any;
  ngAfterViewInit(): void {
    //@ts-ignore
    this.gallery = new Viewer(this.articleBodyRef.nativeElement, {
      title: false,
    });
  }
  ngOnDestroy(): void {
    this.gallery.destroy();
    this.gallery = null;
  }
}

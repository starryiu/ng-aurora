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
import __config from '../../../config';

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
      //更改网站标题
      this.utilsService.changeSiteTitle(this.article.title);
      this.utilsService.backTop();
    });
  }

  /**
   * 文章图片预览
   */
  @ViewChild('articleBody') articleBodyRef!: ElementRef;
  gallery!: any;
  ngAfterViewInit(): void {
    //文章图片加载中
    const articleImages =
      this.articleBodyRef.nativeElement.querySelectorAll('.article-image-box');
    [...articleImages].map((articleImage: any) => {
      const articleImageRef = articleImage.querySelector('.article-image');
      const articleImageLoadingRef = articleImage.querySelector(
        '.article-image-loading'
      );
      this.utilsService.loadImage(articleImageRef.src).subscribe((res) => {
        if (res.loadStatus) {
          articleImageRef.classList.add('active');
          articleImageLoadingRef.classList.add('hide');
        }
      });
    });

    //@ts-ignore
    this.gallery = new Viewer(this.articleBodyRef.nativeElement, {
      title: false,
    });
  }
  ngOnDestroy(): void {
    this.gallery.destroy();
    this.gallery = null;
    //复原网站标题
    this.utilsService.resetSiteTitle();
  }
}

import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BookmarkOne, CalendarDot, Tag } from '@icon-park/svg';
import { UtilsService } from '../../shared/utils.service';
import { HomeArticle } from '../../shared/type';
import { StoreService } from '../../shared/store.service';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() article!: HomeArticle;

  calendarIcon = this.utilsService.getIconPark(CalendarDot({}));
  tagIcon = this.utilsService.getIconPark(Tag({}));
  bookmarkOneIcon = this.utilsService.getIconPark(BookmarkOne({}));
  constructor(
    private utilsService: UtilsService,
    private storeService: StoreService,
  ) {}

  ngOnInit(): void {}
  /**
   * 卡片监听
   */
  @ViewChild('articleCard') articleCard: any;
  ngAfterViewInit() {
    this.storeService.articleCardsIntersectionObserver$.subscribe(
      (observer) => {
        observer.observe(this.articleCard.nativeElement);
      },
    );
  }
  ngOnDestroy() {
    this.storeService.articleCardsIntersectionObserver$.subscribe(
      (observer) => {
        observer.unobserve(this.articleCard.nativeElement);
      },
    );
  }
}

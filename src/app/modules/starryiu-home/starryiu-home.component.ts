import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CalendarDot, Tag, BookmarkOne } from '@icon-park/svg';
import { UtilsService } from '../../shared/utils.service';
import { ApiService } from '../../shared/api.service';
import { HomeArticle } from '../../shared/type';
import { StoreService } from '../../shared/store.service';
import __config from '../../../config';

@Component({
  selector: 'app-starryiu-home',
  templateUrl: './starryiu-home.component.html',
  styleUrls: ['./starryiu-home.component.scss'],
})
export class StarryiuHomeComponent implements OnInit, AfterViewInit, OnDestroy {
  calendarIcon = this.utilsService.getIconPark(CalendarDot({}));
  tagIcon = this.utilsService.getIconPark(Tag({}));
  bookmarkOneIcon = this.utilsService.getIconPark(BookmarkOne({}));

  /**
   * 首页分页
   */
  pageIndex = 1;
  pageTotal: number | undefined = undefined;
  pageLoading = false;
  changePage(page: number) {
    this.storeService.changeHomePageIndexSource(page);
  }
  articles: HomeArticle[] = [];
  loadArticles(page: number, limit: number) {
    this.pageLoading = true;
    this.apiService.getHomeArticles(page, limit).subscribe((articles) => {
      this.articles = articles;
      this.pageLoading = false;
    });
  }

  /**
   * 卡片监听
   */
  @ViewChildren('articleCards') articleCards!: QueryList<any>;
  observerArticleCards = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.remove('duration-500');
        entry.target.classList.remove('translate-y-14');
        entry.target.classList.add('duration-700');
        entry.target.classList.add('translate-y-0');
      } else if (
        entry.intersectionRatio === 0 &&
        entry.boundingClientRect.top > 0
      ) {
        entry.target.classList.remove('duration-700');
        entry.target.classList.remove('translate-y-0');
        entry.target.classList.add('duration-500');
        entry.target.classList.add('translate-y-14');
      }
    });
  };
  observer: IntersectionObserver = new IntersectionObserver(
    this.observerArticleCards
  );
  ngAfterViewInit() {
    this.articleCards.changes.subscribe(() => {
      this.observer.disconnect();
      this.articleCards.map((articleCard) => {
        this.observer.observe(articleCard.nativeElement);
      });
    });
  }
  ngOnDestroy(): void {
    this.observer.disconnect();
  }

  constructor(
    private utilsService: UtilsService,
    private apiService: ApiService,
    private storeService: StoreService
  ) {}

  loadingCover = '';
  ngOnInit(): void {
    this.apiService.getOpenArticleCount().subscribe((articleCount) => {
      this.pageTotal = articleCount as number;
    });
    this.storeService.homePageIndex$.subscribe((value) => {
      this.pageIndex = value;
      this.utilsService
        .loadImage(
          'https://fastly.jsdelivr.net/gh/starryiu/ng-aurora-picgo/main/a6f2da1112160fefe5325be750e4510d---defaultCover.jpg'
        )
        .subscribe((res) => {
          res.loadStatus && this.loadArticles(this.pageIndex, 10);
        });
    });
    this.loadingCover = __config.images.loadingCover;
  }
}

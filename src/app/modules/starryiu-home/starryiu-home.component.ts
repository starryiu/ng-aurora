import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChildren,
} from '@angular/core';
import { CalendarDot, Tag, BookmarkOne } from '@icon-park/svg';
import { UtilsService } from '../../shared/utils.service';
import { ApiService } from '../../shared/api.service';
import { HomeArticle } from '../../shared/type';
import { StoreService } from '../../shared/store.service';

@Component({
  selector: 'app-starryiu-home',
  templateUrl: './starryiu-home.component.html',
  styleUrls: ['./starryiu-home.component.scss'],
})
export class StarryiuHomeComponent implements OnInit, AfterViewInit, OnDestroy {
  articles: HomeArticle[] = [];
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
    this.loadArticles(this.pageIndex, 10);
  }

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
  @ViewChildren('articleCards') articleCards!: any;
  observerArticleCards = (entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.remove('duration-500');
        entry.target.classList.remove('translate-y-14');
        entry.target.classList.add('duration-700');
        entry.target.classList.add('translate-y-0');
      }
      if (entry.intersectionRatio === 0 && entry.boundingClientRect.top > 0) {
        entry.target.classList.remove('duration-700');
        entry.target.classList.remove('translate-y-0');
        entry.target.classList.add('duration-500');
        entry.target.classList.add('translate-y-14');
      }
    });
  };
  observer = new IntersectionObserver(this.observerArticleCards);
  changeArticleCardsRef(val: any) {
    this.observer.disconnect();
    this.observer = new IntersectionObserver(this.observerArticleCards);
    val.map((articleCardRef: any) => {
      this.observer.observe(articleCardRef);
    });
  }
  ngAfterViewInit() {
    this.articleCards.changes.subscribe((r: any) => {
      this.changeArticleCardsRef(
        this.articleCards._results.map(
          (articleCard: { nativeElement: any }) => {
            return articleCard.nativeElement;
          }
        )
      );
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
  ngOnInit(): void {
    this.apiService.getOpenArticleCount().subscribe((articleCount) => {
      this.pageTotal = articleCount as number;
    });
    this.storeService.homePageIndex$.subscribe((value) => {
      this.pageIndex = value;
      this.loadArticles(this.pageIndex, 10);
    });
  }
}

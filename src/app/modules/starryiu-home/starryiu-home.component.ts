import { Component, OnInit } from '@angular/core';
import { CalendarDot, Fire, Bookmark, BookmarkOne } from '@icon-park/svg';
import { UtilsService } from '../../shared/utils.service';
import { ApiService } from '../../shared/api.service';
import { HomeArticle } from '../../shared/type';
import { StoreService } from '../../shared/store.service';

@Component({
  selector: 'app-starryiu-home',
  templateUrl: './starryiu-home.component.html',
  styleUrls: ['./starryiu-home.component.scss'],
})
export class StarryiuHomeComponent implements OnInit {
  articles: HomeArticle[] = [];
  calendarIcon = this.utilsService.getIconPark(CalendarDot({}));
  fireIcon = this.utilsService.getIconPark(Fire({}));
  bookmarkIcon = this.utilsService.getIconPark(Bookmark({}));
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

  constructor(
    private utilsService: UtilsService,
    private apiService: ApiService,
    private storeService: StoreService
  ) {}
  ngOnInit(): void {
    this.storeService.homePageIndex$.subscribe((value) => {
      this.pageIndex = value;
      this.loadArticles(this.pageIndex, 10);
      this.apiService.getOpenArticleCount().subscribe((articleCount) => {
        this.pageTotal = articleCount as number;
      });
    });
  }
}

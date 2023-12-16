import { Component, OnInit } from '@angular/core';
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
      this.articles = articles.map((article) => {
        let src = article.info.src;
        if (
          src.includes('s-bj-1658-tools.oss.dogecdn.com') ||
          src.includes('starryiu/PicGo-jsDelivr/master/PicGo')
        ) {
          article.info.src =
            'https://fastly.jsdelivr.net/gh/starryiu/ng-aurora-picgo/main/' +
            src.split('/').pop();
        }
        return article;
      });
      this.pageLoading = false;
    });
  }

  constructor(
    private utilsService: UtilsService,
    private apiService: ApiService,
    private storeService: StoreService,
  ) {}

  ngOnInit(): void {
    this.apiService.getOpenArticleCount().subscribe((articleCount) => {
      this.pageTotal = articleCount as number;
    });
    this.storeService.homePageIndex$.subscribe((value) => {
      this.pageIndex = value;
      this.utilsService
        .loadImage(
          'https://fastly.jsdelivr.net/gh/starryiu/ng-aurora-picgo/main/a6f2da1112160fefe5325be750e4510d---defaultCover.jpg',
        )
        .subscribe((res) => {
          res.loadStatus && this.loadArticles(this.pageIndex, 10);
        });
    });
  }
}

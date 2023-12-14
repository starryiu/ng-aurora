import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { ArchiveArticle } from '../../shared/type';
import { StoreService } from '../../shared/store.service';

@Component({
  selector: 'app-starryiu-archive',
  templateUrl: './starryiu-archive.component.html',
  styleUrls: ['./starryiu-archive.component.scss'],
})
export class StarryiuArchiveComponent implements OnInit {
  articles: ArchiveArticle[] = [];

  /**
   * 分页
   */
  pageIndex = 1;
  pageTotal: number | undefined = undefined;
  pageLoading = false;
  changePage(page: number) {
    this.storeService.changeArchivePageIndexSource(page);
  }

  loadArchiveArticles(page: number, limit: number) {
    this.pageLoading = true;
    this.apiService.getArchiveArticles(page, limit).subscribe((articles) => {
      this.articles = articles.map((article) => {
        if (article.labels.length > 0) {
          article.labels = article.labels.filter(
            (label: any) => label.name !== 'Archive'
          );
        }
        return article;
      });
      this.pageLoading = false;
    });
  }

  constructor(
    private apiService: ApiService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.storeService.archivePageIndex$.subscribe((value) => {
      this.pageIndex = value;
      this.loadArchiveArticles(this.pageIndex, 10);
    });

    this.apiService.getArchiveArticleCount().subscribe((articleCount) => {
      this.pageTotal = articleCount as number;
    });
  }
}

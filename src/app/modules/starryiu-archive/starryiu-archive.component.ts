import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../shared/utils.service';
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
    this.loadArchiveArticles(this.pageIndex, 10);
  }

  loadArchiveArticles(page: number, limit: number) {
    this.pageLoading = true;
    this.apiService.getArchiveArticles(page, limit).subscribe((articles) => {
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
    this.storeService.archivePageIndex$.subscribe((value) => {
      this.pageIndex = value;
      this.loadArchiveArticles(this.pageIndex, 10);
    });
    this.apiService.getOpenArticleCount().subscribe((articleCount) => {
      this.pageTotal = articleCount as number;
    });
  }
}

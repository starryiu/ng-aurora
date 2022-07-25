import { Component, OnInit } from '@angular/core';
import { Close } from '@icon-park/svg';
import { ApiService } from '../../shared/api.service';
import { ArchiveArticle, PageLabels } from '../../shared/type';
import { UtilsService } from '../../shared/utils.service';
import { forkJoin } from 'rxjs';
import { StoreService } from '../../shared/store.service';

@Component({
  selector: 'app-starryiu-tag',
  templateUrl: './starryiu-tag.component.html',
  styleUrls: ['./starryiu-tag.component.scss'],
})
export class StarryiuTagComponent implements OnInit {
  labels: PageLabels[] = [];
  articles: ArchiveArticle[] = [];
  closeIcon = this.utilsService.getIconPark(Close({}));

  selectLabel!: PageLabels;
  loadArticleByLabel(label: PageLabels, page = 1, limit = 10) {
    this.pageLoading = true;
    let pageTotal$ = this.apiService.getArticlesByLabelCount(label.name);
    let articles$ = this.apiService.getArticlesByLabel(label.name, page, limit);
    forkJoin([pageTotal$, articles$]).subscribe((value) => {
      const [_pageTotal, _article]: any = value;
      this.pageTotal = _pageTotal.length;
      this.articles = _article;
      this.pageLoading = false;
    });
  }

  changeSelectLabel(label: PageLabels) {
    this.storeService.changeLabelPageSource({
      pageIndex: 1,
      selectLabel: label,
    });
  }

  clearSelectLabel() {
    this.articles = [];
    this.storeService.changeLabelPageSource({
      pageIndex: 1,
      selectLabel: null,
    });
  }

  /**
   * 分页
   */
  pageIndex = 1;
  pageTotal: number | undefined = undefined;
  pageLoading = false;
  changePage(page: number) {
    this.storeService.changeLabelPageSource({
      pageIndex: page,
      selectLabel: this.selectLabel,
    });
    this.loadArticleByLabel(this.selectLabel, this.pageIndex, 10);
  }

  constructor(
    private apiService: ApiService,
    private utilsService: UtilsService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.storeService.labelPage$.subscribe((data) => {
      const { pageIndex, selectLabel } = data;
      if (selectLabel) {
        this.selectLabel = selectLabel;
        this.pageIndex = pageIndex;
        this.loadArticleByLabel(this.selectLabel, this.pageIndex);
      }
    });

    this.apiService.getLabel().subscribe((labels) => {
      this.labels = labels;
    });
  }
}

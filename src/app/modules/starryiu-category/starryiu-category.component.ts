import { Component, OnInit } from '@angular/core';
import { Close } from '@icon-park/svg';
import { forkJoin } from 'rxjs';
import { ApiService } from '../../shared/api.service';
import { UtilsService } from '../../shared/utils.service';
import { ArchiveArticle, PageCategory } from '../../shared/type';
import { StoreService } from '../../shared/store.service';

@Component({
  selector: 'app-starryiu-category',
  templateUrl: './starryiu-category.component.html',
  styleUrls: ['./starryiu-category.component.scss'],
})
export class StarryiuCategoryComponent implements OnInit {
  categorys: PageCategory[] = [];
  articles: ArchiveArticle[] = [];
  closeIcon = this.utilsService.getIconPark(Close({}));

  selectCategory!: PageCategory;
  loadArticlesByCategory(category: PageCategory, page = 1, limit = 10) {
    this.pageLoading = true;
    let _number = String(category.number);
    let pageTotal$ = this.apiService.getArticlesByCategoryCount(_number);
    let articles$ = this.apiService.getArticlesByCategory(_number, page, limit);
    forkJoin([pageTotal$, articles$]).subscribe((value) => {
      const [_pageTotal, _article]: any = value;
      this.pageTotal = _pageTotal.length;
      this.articles = _article;
      this.pageLoading = false;
    });
  }
  changeSelectCategory(category: PageCategory) {
    this.storeService.changeCategoryPageSource({
      pageIndex: 1,
      selectCategory: category,
    });
  }

  clearSelectCategory() {
    this.articles = [];
    this.storeService.changeCategoryPageSource({
      pageIndex: 1,
      selectCategory: null,
    });
  }

  /**
   * 分页
   */
  pageIndex!: number;
  pageTotal: number | undefined = undefined;
  pageLoading = false;
  changePage(page: number) {
    this.storeService.changeCategoryPageSource({
      pageIndex: page,
      selectCategory: this.selectCategory,
    });
    this.loadArticlesByCategory(this.selectCategory, this.pageIndex, 10);
  }

  constructor(
    private apiService: ApiService,
    private utilsService: UtilsService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.storeService.categoryPage$.subscribe((data) => {
      const { pageIndex, selectCategory } = data;
      if (selectCategory) {
        this.selectCategory = selectCategory;
        this.pageIndex = pageIndex;
        this.loadArticlesByCategory(this.selectCategory, this.pageIndex);
      }
    });

    this.apiService.getCategory().subscribe((categorys) => {
      this.categorys = categorys;
    });
  }
}

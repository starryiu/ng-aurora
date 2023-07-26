import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { PageCategory, PageLabels } from './type';
import { Theme } from './type';

interface LabelPageType {
  pageIndex: number;
  selectLabel: PageLabels | null;
}

interface CategoryPageType {
  pageIndex: number;
  selectCategory: PageCategory | null;
}

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  //home 分页
  private homePageIndexSource = new BehaviorSubject<number>(1);
  homePageIndex$ = this.homePageIndexSource.asObservable();
  changeHomePageIndexSource(value: number) {
    this.homePageIndexSource.next(value);
  }
  //archive 分页
  private archivePageIndexSource = new BehaviorSubject<number>(1);
  archivePageIndex$ = this.archivePageIndexSource.asObservable();
  changeArchivePageIndexSource(value: number) {
    this.archivePageIndexSource.next(value);
  }
  //分类页面
  private categoryPageSource = new BehaviorSubject<CategoryPageType>({
    pageIndex: 1,
    selectCategory: null,
  });
  categoryPage$ = this.categoryPageSource.asObservable();
  changeCategoryPageSource(value: CategoryPageType) {
    this.categoryPageSource.next(value);
  }
  // 标签页面
  private labelPageSource = new BehaviorSubject<LabelPageType>({
    pageIndex: 1,
    selectLabel: null,
  });
  labelPage$ = this.labelPageSource.asObservable();
  changeLabelPageSource(value: LabelPageType) {
    this.labelPageSource.next(value);
  }
  // 全局加载
  private globalLoadingSource = new BehaviorSubject(false);
  globalLoading$ = this.globalLoadingSource.asObservable();
  changeGlobalLoadingSource(value: boolean) {
    this.globalLoadingSource.next(value);
  }
  //主题轮播图
  private themeSwiperSource = new BehaviorSubject(Theme.touhou);
  themeSwiper$ = this.themeSwiperSource.asObservable();
  changeThemeSwiperSource(value: Theme) {
    this.themeSwiperSource.next(value);
  }
  //全局 window 宽度
  private clientTypeSource = new ReplaySubject<string>();
  clientType$ = this.clientTypeSource.asObservable();
  changeClientTypeSource(value: string) {
    this.clientTypeSource.next(value);
  }
  //主题模式
  private modeThemeSource = new BehaviorSubject<string>(
    localStorage['mode-theme'] ?? 'light'
  );
  modeTheme$ = this.modeThemeSource.asObservable();
  changeModeThemeSource(value: string) {
    this.modeThemeSource.next(value);
  }

  constructor() {}
}

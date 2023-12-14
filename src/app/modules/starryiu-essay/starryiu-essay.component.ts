import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { Essay } from '../../shared/type';
import {StoreService} from "../../shared/store.service";

@Component({
  selector: 'app-starryiu-essay',
  templateUrl: './starryiu-essay.component.html',
  styleUrls: ['./starryiu-essay.component.scss'],
})
export class StarryiuEssayComponent implements OnInit {
  essay: Essay[] = [];

  /**
   * 分页
   */
  pageIndex = 1;
  pageTotal: number | undefined = undefined;
  pageLoading = false;
  changePage(page: number) {
    this.storeService.changeEssayPageIndexSource(page);
  }

  loadEssay(page: number, limit: number) {
    this.pageLoading = true;
    this.apiService.getEssay(page, limit).subscribe((data) => {
      this.essay = data;
      this.pageLoading = false;
    });
  }

  constructor(private apiService: ApiService, private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService.essayPageIndex$.subscribe((value) => {
      this.pageIndex = value;
      this.loadEssay(this.pageIndex, 10);
    });

    this.apiService.getEssayCount().subscribe((count) => {
      this.pageTotal = count;
    });
  }
}

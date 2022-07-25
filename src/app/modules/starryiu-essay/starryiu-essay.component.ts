import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { Essay } from '../../shared/type';

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
    this.pageIndex = page;
    this.loadEssay(this.pageIndex, 10);
  }

  loadEssay(page: number, limit: number) {
    this.pageLoading = true;
    this.apiService.getEssay(this.pageIndex, 10).subscribe((datas) => {
      this.essay = datas;
      this.pageLoading = false;
    });
  }

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadEssay(1, 10);
    this.apiService.getEssayCount().subscribe((count) => {
      this.pageTotal = count;
    });
  }
}

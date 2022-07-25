import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UtilsService } from '../../shared/utils.service';

@Component({
  selector: 'app-starryiu-pagination',
  templateUrl: './starryiu-pagination.component.html',
  styleUrls: ['./starryiu-pagination.component.scss'],
})
export class StarryiuPaginationComponent implements OnInit {
  @Input() pageIndex = 1;
  @Input() pageSize = 10;
  @Input() pageTotal!: number;
  @Input() pageLoading: boolean = false;
  @Output() pageIndexChange = new EventEmitter<number>();

  pages!: number;

  prev() {
    this.pageIndexChange.emit(this.pageIndex - 1);
    this.utilsService.backTop();
  }
  next() {
    this.pageIndexChange.emit(this.pageIndex + 1);
    this.utilsService.backTop();
  }

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.pages = Math.ceil(this.pageTotal / 10);
  }
}

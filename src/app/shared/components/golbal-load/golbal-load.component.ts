import { Component, OnInit } from '@angular/core';
import { Loading } from '@icon-park/svg';
import { UtilsService } from '../../utils.service';
import { StoreService } from '../../store.service';

@Component({
  selector: 'app-golbal-load',
  templateUrl: './golbal-load.component.html',
  styleUrls: ['./golbal-load.component.scss'],
})
export class GolbalLoadComponent implements OnInit {
  loadingIcon = this.utilsService.getIconPark(
    Loading({ theme: 'outline', size: '1.15em' })
  );

  constructor(
    private utilsService: UtilsService,
    private storeService: StoreService
  ) {}

  loading!: boolean;
  ngOnInit(): void {
    this.storeService.globalLoading$.subscribe((value) => {
      this.loading = value;
    });
  }
}

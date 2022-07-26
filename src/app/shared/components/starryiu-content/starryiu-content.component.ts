import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from '../../store.service';

@Component({
  selector: 'app-starryiu-content',
  templateUrl: './starryiu-content.component.html',
  styleUrls: ['./starryiu-content.component.scss'],
})
export class StarryiuContentComponent implements OnInit {
  @Input() transparent = false;

  constructor(private storeService: StoreService) {}

  loading!: boolean;
  ngOnInit(): void {
    this.storeService.globalLoading$.subscribe((value) => {
      this.loading = value;
    });
  }
}

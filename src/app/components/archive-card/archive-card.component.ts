import { Component, Input, OnInit } from '@angular/core';
import { BookmarkOne, CalendarDot, Tag } from '@icon-park/svg';
import { UtilsService } from '../../shared/utils.service';
import { ArchiveArticle } from '../../shared/type';
import { StoreService } from 'src/app/shared/store.service';

@Component({
  selector: 'app-archive-card',
  templateUrl: './archive-card.component.html',
  styleUrls: ['./archive-card.component.scss'],
})
export class ArchiveCardComponent implements OnInit {
  @Input() archiveArticle!: ArchiveArticle;

  calendarIcon = this.utilsService.getIconPark(CalendarDot({}));
  tagIcon = this.utilsService.getIconPark(Tag({}));
  bookmarkOneIcon = this.utilsService.getIconPark(BookmarkOne({}));

  constructor(
    private utilsService: UtilsService,
    private storeService: StoreService
  ) {}

  clientType!: string;
  color!: string;
  ngOnInit(): void {
    this.storeService.clientType$.subscribe((type) => {
      this.clientType = type;
    });
    this.color = this.utilsService.getRandomColor();
  }
}

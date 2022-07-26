import { Component, Input, OnInit } from '@angular/core';
import { BookmarkOne, CalendarDot, Tag } from '@icon-park/svg';
import { UtilsService } from '../../shared/utils.service';
import { ArchiveArticle } from '../../shared/type';

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

  constructor(private utilsService: UtilsService) {}

  color!: string;
  ngOnInit(): void {
    this.color = this.utilsService.getRandomColor();
  }
}

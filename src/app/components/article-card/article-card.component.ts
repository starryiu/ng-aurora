import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { BookmarkOne, CalendarDot, Tag } from '@icon-park/svg';
import { UtilsService } from '../../shared/utils.service';
import { HomeArticle } from '../../shared/type';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() article!: HomeArticle;

  calendarIcon = this.utilsService.getIconPark(CalendarDot({}));
  tagIcon = this.utilsService.getIconPark(Tag({}));
  bookmarkOneIcon = this.utilsService.getIconPark(BookmarkOne({}));
  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {}
  ngOnDestroy() {}
}

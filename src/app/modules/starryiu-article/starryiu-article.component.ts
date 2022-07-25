import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalendarDot, Fire, Bookmark, BookmarkOne } from '@icon-park/svg';
import { UtilsService } from '../../shared/utils.service';
import { ApiService } from '../../shared/api.service';
import { Article } from '../../shared/type';

@Component({
  selector: 'app-starryiu-article',
  templateUrl: './starryiu-article.component.html',
  styleUrls: ['./starryiu-article.component.scss'],
})
export class StarryiuArticleComponent implements OnInit {
  article!: Article;
  calendarIcon = this.utilsService.getIconPark(CalendarDot({}));
  fireIcon = this.utilsService.getIconPark(Fire({}));
  bookmarkIcon = this.utilsService.getIconPark(Bookmark({}));
  bookmarkOneIcon = this.utilsService.getIconPark(BookmarkOne({}));

  loadArticle(id: string) {
    this.apiService.getArticle(id).subscribe((data: Article) => {
      this.article = data;
    });
  }

  constructor(
    private utilsService: UtilsService,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: any) => {
      this.loadArticle(param.params.id);
    });
  }
}

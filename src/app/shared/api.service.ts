import { Injectable } from '@angular/core';
import { omit as __omit, pick as __pick, unionBy as __unionBy } from 'lodash';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { UtilsService } from './utils.service';
import {
  About,
  ArchiveArticle,
  Article,
  Essay,
  Friend,
  HomeArticle,
  PageCategory,
  PageLabels,
  Resource,
} from './type';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  GITHUB_USER = 'starryiu';
  GITHUB_ROPO = 'aurora-article';
  GITHUB_API = `https://api.github.com/repos/${this.GITHUB_USER}/${this.GITHUB_ROPO}`;

  private pickPostData(datas: any) {
    return __pick(datas, [
      'id',
      'number',
      'title',
      'milestone',
      'labels',
      'state',
      'body',
      'created_at',
    ]);
  }
  //获取open文章的总数
  getOpenArticleCount() {
    return new Observable((observer) => {
      this.http.get(this.GITHUB_API).subscribe((data: any) => {
        observer.next(data.open_issues);
        observer.complete();
      });
    });
  }
  //获取首页文章列表
  getHomeArticles(
    page: number,
    limit: number,
    state: string = 'open'
  ): Observable<HomeArticle[]> {
    return new Observable((observer) => {
      this.http
        .get(
          `${this.GITHUB_API}/issues?page=${page}&per_page=${limit}&state=${state}`
        )
        .subscribe((datas: any) => {
          let formatDatas = datas.map((val: any) => {
            val = this.pickPostData(val);
            val.info = this.utilsService.formatPost(val.body);
            val = __omit(val, ['body']);
            return val;
          });
          observer.next(formatDatas);
          observer.complete();
        });
    });
  }
  //获取归档文章列表
  getArchiveArticleCount() {
    return new Observable((observer) => {
      this.http
        .get(`${this.GITHUB_API}/issues?state=closed&labels=Archive`)
        .subscribe((articleCount: any) => {
          observer.next(articleCount.length);
          observer.complete();
        });
    });
  }
  getArchiveArticles(
    page: number,
    limit: number,
    state: string = 'closed'
  ): Observable<ArchiveArticle[]> {
    return new Observable((observer) => {
      this.http
        .get(
          `${this.GITHUB_API}/issues?page=${page}&per_page=${limit}&state=${state}&labels=Archive`
        )
        .subscribe((datas: any) => {
          let formatDatas = datas.map((val: any) => {
            val = this.pickPostData(val);
            val = __omit(val, ['body']);
            return val;
          });
          observer.next(formatDatas);
          observer.complete();
        });
    });
  }
  //获取分类
  private pickCategoryData(datas: any) {
    return datas.map((val: any) => {
      return __pick(val, [
        'id',
        'number',
        'title',
        'description',
        'state',
        'open_issues',
        'created_at',
      ]);
    });
  }
  getCategory(): Observable<PageCategory[]> {
    return new Observable((observer) => {
      this.http.get(`${this.GITHUB_API}/milestones`).subscribe((data: any) => {
        let formatData = this.pickCategoryData(data);
        formatData = formatData.map((o: any) => {
          const description = o.description.split('\r\n');
          o.summary = description[0].split('summary:')[1];
          o.cover = this.sanitizer.bypassSecurityTrustUrl(
            description[1].split('cover:')[1]
          );
          return o;
        });
        observer.next(formatData);
        observer.complete();
      });
    });
  }
  //获取标签
  getLabel(): Observable<PageLabels[]> {
    return new Observable((observer) => {
      this.http
        .get(`${this.GITHUB_API}/issues?state=open`)
        .subscribe((data: any) => {
          const formatData: any = __unionBy(
            data.map((article: any) => article.labels).flat(),
            'name'
          );
          formatData.sort((a: any, b: any) => {
            return b.id - a.id;
          });
          observer.next(formatData);
          observer.complete();
        });
    });
  }
  //获取资源
  getResource() {
    return new Observable<Resource[]>((observer) => {
      this.http
        .get(`${this.GITHUB_API}/issues?state=closed&labels=Resource`)
        .subscribe((data: any) => {
          let formatBody = this.utilsService.formatPage(data[0], 'resource');
          formatBody.map((o: any) => {
            o.cover = this.sanitizer.bypassSecurityTrustUrl(o.cover);
            return o;
          });
          observer.next(formatBody);
          observer.complete();
        });
    });
  }
  //获取随笔（原灵感）
  getEssayCount() {
    return new Observable<number>((observer) => {
      this.http
        .get(`${this.GITHUB_API}/issues?state=closed&labels=Inspiration`)
        .subscribe((essay: any) => {
          observer.next(essay.length);
          observer.complete();
        });
    });
  }
  getEssay(page: number, limit: number) {
    return new Observable<Essay[]>((observer) => {
      this.http
        .get(
          `${this.GITHUB_API}/issues?page=${page}&per_page=${limit}&state=closed&labels=Inspiration`
        )
        .subscribe((data: any) => {
          let formatData = data.map((o: any) =>
            __pick(o, ['created_at', 'body'])
          );
          observer.next(formatData);
          observer.complete();
        });
    });
  }
  //获取友链
  getFriends() {
    return new Observable<Friend[]>((observer) => {
      this.http
        .get(`${this.GITHUB_API}/issues?state=closed&labels=Friend`)
        .subscribe((data: any) => {
          let formatData = this.utilsService.formatPage(data[0], 'friend');
          formatData = formatData.map((o: any) => {
            o = __pick(o, ['avatar', 'cover', 'link', 'name']);
            o.cover = this.sanitizer.bypassSecurityTrustUrl(o.cover);
            o.avatar = this.sanitizer.bypassSecurityTrustUrl(o.avatar);
            return o;
          });
          observer.next(formatData);
          observer.complete();
        });
    });
  }
  //获取关于
  getAbout() {
    return new Observable<About[]>((observer) => {
      this.http
        .get(`${this.GITHUB_API}/issues?state=closed&labels=About`)
        .subscribe((data: any) => {
          let formatData = this.utilsService.formatPage(data[0], 'about');
          observer.next(formatData);
          observer.complete();
        });
    });
  }
  //获取文章内容
  getArticle(articleNumber: string) {
    return new Observable<Article>((observer) => {
      this.http
        .get(`${this.GITHUB_API}/issues/${Number(articleNumber)}?state=open`)
        .pipe(catchError(this.handleError))
        .subscribe((val: any) => {
          val = this.pickPostData(val);
          val.info = this.utilsService.formatPost(val.body);
          observer.next(val);
          observer.complete();
        });
    });
  }
  //通过分类获取文章
  getArticlesByCategoryCount(categoryNumber: string) {
    return this.http.get(
      `${this.GITHUB_API}/issues?milestone=${categoryNumber}&state=open`
    );
  }
  getArticlesByCategory(categoryNumber: string, page: number, limit: number) {
    return new Observable<ArchiveArticle[]>((observer) => {
      this.http
        .get(
          `${this.GITHUB_API}/issues?milestone=${categoryNumber}&page=${page}&per_page=${limit}&state=open`
        )
        .subscribe((datas: any) => {
          let formatDatas = datas.map((val: any) => {
            val = this.pickPostData(val);
            val = __omit(val, ['body']);
            return val;
          });
          observer.next(formatDatas);
          observer.complete();
        });
    });
  }
  //通过标签获取文章
  getArticlesByLabelCount(labelName: string) {
    return this.http.get(
      `${this.GITHUB_API}/issues?labels=${labelName}&state=open`
    );
  }
  getArticlesByLabel(labelName: string, page: number, limit: number) {
    return new Observable<ArchiveArticle[]>((observer) => {
      this.http
        .get(
          `${this.GITHUB_API}/issues?labels=${labelName}&page=${page}&per_page=${limit}&state=open`
        )
        .subscribe((datas: any) => {
          let formatDatas = datas.map((val: any) => {
            val = this.pickPostData(val);
            val = __omit(val, ['body']);
            return val;
          });
          observer.next(formatDatas);
          observer.complete();
        });
    });
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
      console.error('客户端错误，可能有网络波动。');
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
      console.error('服务端错误，访问 github api 出错。');
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  constructor(
    private utilsService: UtilsService,
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) {}
}

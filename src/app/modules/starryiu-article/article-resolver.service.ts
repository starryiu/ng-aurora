import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../shared/api.service';
import { Article } from '../../shared/type';

@Injectable({
  providedIn: 'root',
})
export class ArticleResolverService implements Resolve<Article> {
  constructor(private router: Router, private apiService: ApiService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Article> | Observable<never> {
    const id = route.paramMap.get('id')!;
    return this.apiService.getArticle(id);
  }
}

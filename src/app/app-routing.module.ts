import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StarryiuHomeComponent } from './modules/starryiu-home/starryiu-home.component';
import { StarryiuArchiveComponent } from './modules/starryiu-archive/starryiu-archive.component';
import { StarryiuCategoryComponent } from './modules/starryiu-category/starryiu-category.component';
import { StarryiuTagComponent } from './modules/starryiu-tag/starryiu-tag.component';
import { StarryiuResourceComponent } from './modules/starryiu-resource/starryiu-resource.component';
import { StarryiuEssayComponent } from './modules/starryiu-essay/starryiu-essay.component';
import { StarryiuFriendComponent } from './modules/starryiu-friend/starryiu-friend.component';
import { StarryiuAboutComponent } from './modules/starryiu-about/starryiu-about.component';
import { StarryiuArticleComponent } from './modules/starryiu-article/starryiu-article.component';

import { ArticleResolverService } from './modules/starryiu-article/article-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: StarryiuHomeComponent,
    pathMatch: 'full',
    data: {
      animation: 'Home',
    },
  },
  {
    path: 'archive',
    component: StarryiuArchiveComponent,
    data: {
      animation: 'Archive',
    },
  },
  {
    path: 'category',
    component: StarryiuCategoryComponent,
    data: {
      animation: 'Category',
    },
  },
  {
    path: 'tag',
    component: StarryiuTagComponent,
    data: {
      animation: 'Tag',
    },
  },
  {
    path: 'resource',
    component: StarryiuResourceComponent,
    data: {
      animation: 'Resource',
    },
  },
  {
    path: 'essay',
    component: StarryiuEssayComponent,
    data: {
      animation: 'Essay',
    },
  },
  {
    path: 'friend',
    component: StarryiuFriendComponent,
    data: {
      animation: 'Friend',
    },
  },
  {
    path: 'about',
    component: StarryiuAboutComponent,
    data: {
      animation: 'About',
    },
  },
  {
    path: 'post/:id',
    component: StarryiuArticleComponent,
    resolve: {
      article: ArticleResolverService,
    },
    data: {
      animation: 'Post',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

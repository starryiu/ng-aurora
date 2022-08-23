import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StarryiuBgComponent } from './components/starryiu-bg/starryiu-bg.component';
import { StarryiuLayoutComponent } from './shared/components/starryiu-layout/starryiu-layout.component';
import { StarryiuHeaderComponent } from './shared/components/starryiu-header/starryiu-header.component';
import { StarryiuNavComponent } from './shared/components/starryiu-nav/starryiu-nav.component';
import { StarryiuHomeComponent } from './modules/starryiu-home/starryiu-home.component';
import { StarryiuFooterComponent } from './shared/components/starryiu-footer/starryiu-footer.component';
import { StarryiuPaginationComponent } from './components/starryiu-pagination/starryiu-pagination.component';
import { StarryiuBacktopComponent } from './components/starryiu-backtop/starryiu-backtop.component';
import { StarryiuArchiveComponent } from './modules/starryiu-archive/starryiu-archive.component';
import { StarryiuQuoteComponent } from './components/starryiu-quote/starryiu-quote.component';
import { StarryiuCategoryComponent } from './modules/starryiu-category/starryiu-category.component';
import { StarryiuTagComponent } from './modules/starryiu-tag/starryiu-tag.component';
import { StarryiuResourceComponent } from './modules/starryiu-resource/starryiu-resource.component';
import { StarryiuEssayComponent } from './modules/starryiu-essay/starryiu-essay.component';
import { StarryiuSegmentComponent } from './components/starryiu-segment/starryiu-segment.component';
import { StarryiuFriendComponent } from './modules/starryiu-friend/starryiu-friend.component';
import { StarryiuAboutComponent } from './modules/starryiu-about/starryiu-about.component';
import { StarryiuArticleComponent } from './modules/starryiu-article/starryiu-article.component';
import { StarryiuPlayerComponent } from './components/starryiu-player/starryiu-player.component';
import { StarryiuPanelComponent } from './components/starryiu-panel/starryiu-panel.component';
import { StarryiuCoverComponent } from './components/starryiu-cover/starryiu-cover.component';
import { ArchiveCardComponent } from './components/archive-card/archive-card.component';
import { GolbalLoadComponent } from './shared/components/golbal-load/golbal-load.component';
import { StarryiuContentComponent } from './shared/components/starryiu-content/starryiu-content.component';

import { TimeagoPipe } from './pipes/timeago.pipe';
import { PixivFormatPipe } from './pipes/pixiv-format.pipe';
import { MarkedPipe } from './pipes/marked.pipe';
import { IsEmptyPipe } from './pipes/is-empty.pipe';

import { StarryiuRequestInterceptor } from './interceptor/starryiu-request.interceptor';
import { HeaderProgressComponent } from './components/header-progress/header-progress.component';
import { StarryiuWalineComponent } from './components/starryiu-waline/starryiu-waline.component';
@NgModule({
  declarations: [
    TimeagoPipe,
    PixivFormatPipe,
    MarkedPipe,
    IsEmptyPipe,
    AppComponent,
    StarryiuBgComponent,
    StarryiuLayoutComponent,
    StarryiuHeaderComponent,
    StarryiuNavComponent,
    StarryiuHomeComponent,
    StarryiuFooterComponent,
    StarryiuPaginationComponent,
    StarryiuBacktopComponent,
    StarryiuArchiveComponent,
    StarryiuQuoteComponent,
    StarryiuCategoryComponent,
    StarryiuTagComponent,
    StarryiuResourceComponent,
    StarryiuEssayComponent,
    StarryiuSegmentComponent,
    StarryiuFriendComponent,
    StarryiuAboutComponent,
    StarryiuArticleComponent,
    StarryiuPlayerComponent,
    StarryiuPanelComponent,
    StarryiuCoverComponent,
    ArchiveCardComponent,
    GolbalLoadComponent,
    StarryiuContentComponent,
    HeaderProgressComponent,
    StarryiuWalineComponent,
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: StarryiuRequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { BehaviorSubject, interval, Subscription } from 'rxjs';
import {
  Right,
  RightC,
  GoStart,
  GoEnd,
  RightOne,
  ListMiddle,
  VolumeUp,
  VolumeDown,
  Left,
  Pause,
} from '@icon-park/svg';
import { IIconBase } from '@icon-park/svg/lib/runtime';
import { StoreService } from 'src/app/shared/store.service';
import { UtilsService } from '../../shared/utils.service';
import __config from '../../../config';

@Component({
  selector: 'app-starryiu-player',
  templateUrl: './starryiu-player.component.html',
  styleUrls: ['./starryiu-player.component.scss'],
})
export class StarryiuPlayerComponent implements OnInit, AfterViewInit {
  iconConfig: IIconBase = { theme: 'outline', size: '1em' };
  rightIcon = this.utilsService.getIconPark(Right(this.iconConfig));
  rightCIcon = this.utilsService.getIconPark(
    RightC({ theme: 'outline', size: '1.4em', strokeWidth: 3, fill: 'white' })
  );
  leftIcon = this.utilsService.getIconPark(Left(this.iconConfig));
  goStartIcon = this.utilsService.getIconPark(GoStart(this.iconConfig));
  rightOneIcon = this.utilsService.getIconPark(RightOne(this.iconConfig));
  goEndIcon = this.utilsService.getIconPark(GoEnd(this.iconConfig));
  listMiddleIcon = this.utilsService.getIconPark(ListMiddle(this.iconConfig));
  volumeUpIcon = this.utilsService.getIconPark(VolumeUp(this.iconConfig));
  volumeDownIcon = this.utilsService.getIconPark(VolumeDown(this.iconConfig));
  pauseIcon = this.utilsService.getIconPark(Pause(this.iconConfig));

  openList = true;
  musicList = __config.musicList;

  miniOpen = true;
  openPlayer() {
    this.miniOpen = !this.miniOpen;
  }

  musicIndex$ = new BehaviorSubject(0);
  musicIndex = 0;
  changeMusic(i: number) {
    this.musicIndex$.next(i);
  }

  @ViewChild('audio') audioRef!: ElementRef;
  //播放 暂停
  play = false;
  changePlay() {
    this.play = !this.play;
    if (this.play && this.audioRef) {
      this.audioRef.nativeElement.play();
      this.watchSlideWidth();
    } else {
      this.audioRef.nativeElement.pause();
      this.unWatchSlideWidth();
    }
  }

  //调节音量
  volume = 0.3;
  addVolume() {
    this.volume += 0.1;
    this.volume > 1 && (this.volume = 1);
    this.audioRef.nativeElement.volume = this.volume;
  }
  recVolume() {
    this.volume -= 0.1;
    this.volume < 0 && (this.volume = 0);
    this.audioRef.nativeElement.volume = this.volume;
  }
  //上一首 下一首
  prevMusic() {
    let prevIndex = this.musicIndex - 1;
    if (prevIndex < 0) {
      prevIndex = this.musicList.length - 1;
    }
    this.musicIndex$.next(prevIndex);
  }
  nextMusic() {
    let nextIndex = this.musicIndex + 1;
    if (nextIndex > this.musicList.length - 1) {
      nextIndex = 0;
    }
    this.musicIndex$.next(nextIndex);
  }
  //进度条
  slideWidth = 0;
  slideWidth$!: Subscription;
  watchSlideWidth() {
    this.slideWidth$ = interval(1000).subscribe(() => {
      let audio = this.audioRef.nativeElement;
      this.slideWidth = Number(
        ((audio.currentTime / audio.duration) * 100).toFixed(2)
      );
    });
  }
  unWatchSlideWidth() {
    this.slideWidth$ && this.slideWidth$.unsubscribe();
  }

  constructor(
    private utilsService: UtilsService,
    private storeService: StoreService
  ) {}

  type!: string;
  ngOnInit(): void {
    this.storeService.clientType$.subscribe((type) => {
      this.type = type;
    });

    this.musicIndex$.subscribe((value) => {
      this.musicIndex = value;
      this.play = false;
      this.slideWidth = 0;
      this.unWatchSlideWidth();
    });
  }

  ngAfterViewInit() {
    this.audioRef.nativeElement.volume = this.volume;
  }
}

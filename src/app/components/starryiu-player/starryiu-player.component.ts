import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Right, RightC } from '@icon-park/svg';
import { StoreService } from 'src/app/shared/store.service';
import { UtilsService } from '../../shared/utils.service';

@Component({
  selector: 'app-starryiu-player',
  templateUrl: './starryiu-player.component.html',
  styleUrls: ['./starryiu-player.component.scss'],
})
export class StarryiuPlayerComponent implements OnInit {
  open = false;
  play = false;
  rightIcon = this.utilsService.getIconPark(
    Right({ theme: 'outline', fill: 'white' })
  );
  RightCIcon = this.utilsService.getIconPark(
    RightC({ theme: 'outline', size: '1.4em', strokeWidth: 3, fill: 'white' })
  );

  openPlayer() {
    this.open = !this.open;
  }

  @ViewChild('audio') audioRef!: ElementRef;
  changePlay() {
    this.play = !this.play;
    if (this.play && this.audioRef) {
      this.audioRef.nativeElement.play();
    } else {
      this.audioRef.nativeElement.pause();
    }
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
  }
}

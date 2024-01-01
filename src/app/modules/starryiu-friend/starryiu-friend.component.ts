import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { Friend } from '../../shared/type';
import __config from '../../../config';

@Component({
  selector: 'app-starryiu-friend',
  templateUrl: './starryiu-friend.component.html',
  styleUrls: ['./starryiu-friend.component.scss'],
})
export class StarryiuFriendComponent implements OnInit {
  friends: Friend[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getFriends().subscribe((friends) => {
      this.friends = friends;
    });
  }

  avatarError(e: any) {
    e.target.src = __config.images.avatar;
  }
  coverError(e: any) {
    e.target.src = __config.images.defaultCover;
  }

  protected readonly __config = __config;
}

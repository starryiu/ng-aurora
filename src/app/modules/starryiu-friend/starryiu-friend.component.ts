import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { Friend } from '../../shared/type';

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
    e.target.src =
      'https://fastly.jsdelivr.net/gh/starryiu/ng-aurora-picgo/main/9e8fac15152ec6c1a6caace803203dd3.jpg';
  }
  coverError(e: any) {
    e.target.src =
      'https://fastly.jsdelivr.net/gh/starryiu/ng-aurora-picgo/main/a6f2da1112160fefe5325be750e4510d---defaultCover.jpg';
  }
}

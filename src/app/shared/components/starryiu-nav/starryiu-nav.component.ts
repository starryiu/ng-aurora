import { Component, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import {
  Home,
  CollectionFiles,
  BookmarkOne,
  Tag,
  Like,
  Magic,
  Fireworks,
  Me,
} from '@icon-park/svg';
import { UtilsService } from '../../utils.service';

interface Nav {
  name: string;
  path: string;
  icon: null | SafeHtml;
}

@Component({
  selector: 'app-starryiu-nav',
  templateUrl: './starryiu-nav.component.html',
  styleUrls: ['./starryiu-nav.component.scss'],
})
export class StarryiuNavComponent implements OnInit {
  navs: Nav[] = [
    {
      name: '首页',
      path: '',
      icon: this.utilsService.getIconPark(
        Home({ theme: 'outline', size: '1em', strokeWidth: 3 })
      ),
    },
    {
      name: '归档',
      path: 'archive',
      icon: this.utilsService.getIconPark(
        CollectionFiles({ theme: 'outline', size: '1em', strokeWidth: 3 })
      ),
    },
    {
      name: '分类',
      path: 'category',
      icon: this.utilsService.getIconPark(
        BookmarkOne({ theme: 'outline', size: '1em', strokeWidth: 3 })
      ),
    },
    {
      name: '标签',
      path: 'tag',
      icon: this.utilsService.getIconPark(
        Tag({ theme: 'outline', size: '1em', strokeWidth: 3 })
      ),
    },
    {
      name: '资源',
      path: 'resource',
      icon: this.utilsService.getIconPark(
        Magic({ theme: 'outline', size: '1em', strokeWidth: 3 })
      ),
    },
    {
      name: '随笔',
      path: 'essay',
      icon: this.utilsService.getIconPark(
        Fireworks({ theme: 'outline', size: '1em', strokeWidth: 3 })
      ),
    },
    {
      name: '友链',
      path: 'friend',
      icon: this.utilsService.getIconPark(
        Like({ theme: 'outline', size: '1em', strokeWidth: 3 })
      ),
    },
    {
      name: '关于',
      path: 'about',
      icon: this.utilsService.getIconPark(
        Me({ theme: 'outline', size: '1em', strokeWidth: 3 })
      ),
    },
  ];

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {}
}

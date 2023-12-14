import { Component, OnInit } from '@angular/core';
import __config from "../../../config";

@Component({
  selector: 'app-anime-loading',
  templateUrl: './anime-loading.component.html',
  styleUrls: ['./anime-loading.component.scss']
})
export class AnimeLoadingComponent implements OnInit {

  constructor() { }

  loadingCover = "";
  ngOnInit(): void {
    this.loadingCover = __config.images.loadingCover;
  }

}

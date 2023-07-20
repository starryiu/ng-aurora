import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { Resource } from '../../shared/type';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-starryiu-resource',
  templateUrl: './starryiu-resource.component.html',
  styleUrls: ['./starryiu-resource.component.scss'],
})
export class StarryiuResourceComponent implements OnInit {
  resources: Resource[] = [];

  constructor(
    private apiService: ApiService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.apiService.getResource().subscribe((datas) => {
      this.resources = datas.map((o: any) => {
        o.cover = this.sanitizer.bypassSecurityTrustUrl(
          `https://fastly.jsdelivr.net/gh/starryiu/ng-aurora-picgo/main/${
            new URL(o.link).hostname
          }.ico`
        );
        return o;
      });
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { Resource } from '../../shared/type';

@Component({
  selector: 'app-starryiu-resource',
  templateUrl: './starryiu-resource.component.html',
  styleUrls: ['./starryiu-resource.component.scss'],
})
export class StarryiuResourceComponent implements OnInit {
  resources: Resource[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getResource().subscribe((datas) => {
      this.resources = datas;
    });
  }
}

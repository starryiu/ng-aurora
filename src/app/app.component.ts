import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  showApp = false;
  ngOnInit(): void {
    window.addEventListener('load', () => {
      this.showApp = true;
    });
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarryiuArticleComponent } from './starryiu-article.component';

describe('StarryiuArticleComponent', () => {
  let component: StarryiuArticleComponent;
  let fixture: ComponentFixture<StarryiuArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarryiuArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarryiuArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

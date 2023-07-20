import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarryiuCommentComponent } from './starryiu-comment.component';

describe('StarryiuCommentComponent', () => {
  let component: StarryiuCommentComponent;
  let fixture: ComponentFixture<StarryiuCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarryiuCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarryiuCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

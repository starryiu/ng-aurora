import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarryiuSegmentComponent } from './starryiu-segment.component';

describe('StarryiuSegmentComponent', () => {
  let component: StarryiuSegmentComponent;
  let fixture: ComponentFixture<StarryiuSegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarryiuSegmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarryiuSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

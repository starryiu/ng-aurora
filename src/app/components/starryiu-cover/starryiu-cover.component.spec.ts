import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarryiuCoverComponent } from './starryiu-cover.component';

describe('StarryiuCoverComponent', () => {
  let component: StarryiuCoverComponent;
  let fixture: ComponentFixture<StarryiuCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarryiuCoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarryiuCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

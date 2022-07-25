import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarryiuTagComponent } from './starryiu-tag.component';

describe('StarryiuTagComponent', () => {
  let component: StarryiuTagComponent;
  let fixture: ComponentFixture<StarryiuTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarryiuTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarryiuTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

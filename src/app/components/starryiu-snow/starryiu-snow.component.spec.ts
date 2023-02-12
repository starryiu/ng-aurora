import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarryiuSnowComponent } from './starryiu-snow.component';

describe('StarryiuSnowComponent', () => {
  let component: StarryiuSnowComponent;
  let fixture: ComponentFixture<StarryiuSnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarryiuSnowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarryiuSnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarryiuBgComponent } from './starryiu-bg.component';

describe('StarryiuBgComponent', () => {
  let component: StarryiuBgComponent;
  let fixture: ComponentFixture<StarryiuBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarryiuBgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarryiuBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

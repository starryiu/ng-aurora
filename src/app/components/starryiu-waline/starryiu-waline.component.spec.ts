import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarryiuWalineComponent } from './starryiu-waline.component';

describe('StarryiuWalineComponent', () => {
  let component: StarryiuWalineComponent;
  let fixture: ComponentFixture<StarryiuWalineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarryiuWalineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarryiuWalineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

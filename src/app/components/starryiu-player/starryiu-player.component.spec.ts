import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarryiuPlayerComponent } from './starryiu-player.component';

describe('StarryiuPlayerComponent', () => {
  let component: StarryiuPlayerComponent;
  let fixture: ComponentFixture<StarryiuPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarryiuPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarryiuPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

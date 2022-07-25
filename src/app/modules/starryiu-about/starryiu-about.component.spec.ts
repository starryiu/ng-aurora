import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarryiuAboutComponent } from './starryiu-about.component';

describe('StarryiuAboutComponent', () => {
  let component: StarryiuAboutComponent;
  let fixture: ComponentFixture<StarryiuAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarryiuAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarryiuAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

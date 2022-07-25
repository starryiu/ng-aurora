import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarryiuContentComponent } from './starryiu-content.component';

describe('StarryiuContentComponent', () => {
  let component: StarryiuContentComponent;
  let fixture: ComponentFixture<StarryiuContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarryiuContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarryiuContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

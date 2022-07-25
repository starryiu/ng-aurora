import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarryiuHomeComponent } from './starryiu-home.component';

describe('StarryiuHomeComponent', () => {
  let component: StarryiuHomeComponent;
  let fixture: ComponentFixture<StarryiuHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarryiuHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarryiuHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

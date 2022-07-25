import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarryiuHeaderComponent } from './starryiu-header.component';

describe('StarryiuHeaderComponent', () => {
  let component: StarryiuHeaderComponent;
  let fixture: ComponentFixture<StarryiuHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarryiuHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarryiuHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

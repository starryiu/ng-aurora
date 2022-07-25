import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarryiuEssayComponent } from './starryiu-essay.component';

describe('StarryiuFofoComponent', () => {
  let component: StarryiuEssayComponent;
  let fixture: ComponentFixture<StarryiuEssayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarryiuEssayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StarryiuEssayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

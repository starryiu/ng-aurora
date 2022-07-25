import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarryiuBacktopComponent } from './starryiu-backtop.component';

describe('StarryiuBacktopComponent', () => {
  let component: StarryiuBacktopComponent;
  let fixture: ComponentFixture<StarryiuBacktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarryiuBacktopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarryiuBacktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarryiuLayoutComponent } from './starryiu-layout.component';

describe('StarryiuLayoutComponent', () => {
  let component: StarryiuLayoutComponent;
  let fixture: ComponentFixture<StarryiuLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarryiuLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarryiuLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

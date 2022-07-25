import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarryiuNavComponent } from './starryiu-nav.component';

describe('StarryiuNavComponent', () => {
  let component: StarryiuNavComponent;
  let fixture: ComponentFixture<StarryiuNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarryiuNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarryiuNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

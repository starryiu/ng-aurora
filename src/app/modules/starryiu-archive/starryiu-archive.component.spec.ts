import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarryiuArchiveComponent } from './starryiu-archive.component';

describe('StarryiuArchiveComponent', () => {
  let component: StarryiuArchiveComponent;
  let fixture: ComponentFixture<StarryiuArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarryiuArchiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarryiuArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

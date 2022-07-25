import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarryiuPanelComponent } from './starryiu-panel.component';

describe('StarryiuPanelComponent', () => {
  let component: StarryiuPanelComponent;
  let fixture: ComponentFixture<StarryiuPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarryiuPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarryiuPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

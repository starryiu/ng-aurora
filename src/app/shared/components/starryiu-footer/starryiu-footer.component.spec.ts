import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarryiuFooterComponent } from './starryiu-footer.component';

describe('StarryiuFooterComponent', () => {
  let component: StarryiuFooterComponent;
  let fixture: ComponentFixture<StarryiuFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarryiuFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarryiuFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

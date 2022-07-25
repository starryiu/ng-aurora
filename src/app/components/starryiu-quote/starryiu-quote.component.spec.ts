import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarryiuQuoteComponent } from './starryiu-quote.component';

describe('StarryiuQuoteComponent', () => {
  let component: StarryiuQuoteComponent;
  let fixture: ComponentFixture<StarryiuQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarryiuQuoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarryiuQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

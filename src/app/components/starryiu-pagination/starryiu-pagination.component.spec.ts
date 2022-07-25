import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarryiuPaginationComponent } from './starryiu-pagination.component';

describe('StarryiuPaginationComponent', () => {
  let component: StarryiuPaginationComponent;
  let fixture: ComponentFixture<StarryiuPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarryiuPaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarryiuPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

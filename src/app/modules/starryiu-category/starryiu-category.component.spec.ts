import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarryiuCategoryComponent } from './starryiu-category.component';

describe('StarryiuCategoryComponent', () => {
  let component: StarryiuCategoryComponent;
  let fixture: ComponentFixture<StarryiuCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarryiuCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarryiuCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

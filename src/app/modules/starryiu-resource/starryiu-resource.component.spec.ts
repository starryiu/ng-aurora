import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarryiuResourceComponent } from './starryiu-resource.component';

describe('StarryiuResourceComponent', () => {
  let component: StarryiuResourceComponent;
  let fixture: ComponentFixture<StarryiuResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarryiuResourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarryiuResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolbalLoadComponent } from './golbal-load.component';

describe('GolbalLoadComponent', () => {
  let component: GolbalLoadComponent;
  let fixture: ComponentFixture<GolbalLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GolbalLoadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GolbalLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

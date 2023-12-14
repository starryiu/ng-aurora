import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeLoadingComponent } from './anime-loading.component';

describe('AnimeLoadingComponent', () => {
  let component: AnimeLoadingComponent;
  let fixture: ComponentFixture<AnimeLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

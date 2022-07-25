import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarryiuFriendComponent } from './starryiu-friend.component';

describe('StarryiuFriendComponent', () => {
  let component: StarryiuFriendComponent;
  let fixture: ComponentFixture<StarryiuFriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarryiuFriendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarryiuFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

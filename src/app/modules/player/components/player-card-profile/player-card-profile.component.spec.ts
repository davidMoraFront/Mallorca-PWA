import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCardProfileComponent } from './player-card-profile.component';

describe('PlayerCardProfileComponent', () => {
  let component: PlayerCardProfileComponent;
  let fixture: ComponentFixture<PlayerCardProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerCardProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCardProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

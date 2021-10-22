import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCardProfileEditComponent } from './player-card-profile-edit.component';

describe('PlayerCardProfileEditComponent', () => {
  let component: PlayerCardProfileEditComponent;
  let fixture: ComponentFixture<PlayerCardProfileEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerCardProfileEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCardProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

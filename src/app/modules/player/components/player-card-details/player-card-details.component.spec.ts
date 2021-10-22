import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCardDetailsComponent } from './player-card-details.component';

describe('PlayerCardDetailsComponent', () => {
  let component: PlayerCardDetailsComponent;
  let fixture: ComponentFixture<PlayerCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerCardDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

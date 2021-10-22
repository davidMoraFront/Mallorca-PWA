import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerItemStadisticComponent } from './player-item-stadistic.component';

describe('PlayerItemStadisticComponent', () => {
  let component: PlayerItemStadisticComponent;
  let fixture: ComponentFixture<PlayerItemStadisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerItemStadisticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerItemStadisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

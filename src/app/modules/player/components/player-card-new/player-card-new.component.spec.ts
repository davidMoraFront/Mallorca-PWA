import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCardNewComponent } from './player-card-new.component';

describe('PlayerCardNewComponent', () => {
  let component: PlayerCardNewComponent;
  let fixture: ComponentFixture<PlayerCardNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerCardNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCardNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

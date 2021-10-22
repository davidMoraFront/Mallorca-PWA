import { Component, Input, OnInit } from '@angular/core';
import { Position } from 'src/app/shared/enums/position';

@Component({
  selector: 'app-player-position',
  templateUrl: './player-position.component.html',
  styleUrls: ['./player-position.component.scss']
})
export class PlayerPositionComponent implements OnInit {
  @Input() position: Position;

  constructor() { }

  ngOnInit(): void {
  }

}

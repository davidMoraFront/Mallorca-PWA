import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-icon',
  templateUrl: './player-icon.component.html',
  styleUrls: ['./player-icon.component.scss']
})
export class PlayerIconComponent implements OnInit {
  @Input() image: string;
  @Input() position: string;

  constructor() { }

  ngOnInit(): void {
  }

}

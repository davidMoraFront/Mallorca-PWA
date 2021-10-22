import { Component, OnInit } from '@angular/core';
import { StadisticType } from '../../enums/stadistic-type';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  arrayStadistics: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.arrayStadistics = Object.keys(StadisticType).map(key => StadisticType[key]);
  }

}

import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StadisticType } from '../../enums/stadistic-type';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  arrayStadistics: string[] = [];
  typeCompetition: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.arrayStadistics = Object.keys(StadisticType).map(key => StadisticType[key]);
  }

  getCompetition() {
    this.activatedRoute.params.subscribe(params => {
      this.typeCompetition = this.router.url.split('/')[2];
    });
    return this.typeCompetition;
  }

}

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /*historical;
  season;

  goList(data) {
    this.router.navigate(['competition', 'list'], { state: data});
    //this.router.navigateByUrl('list', { state: data});
  }*/

}

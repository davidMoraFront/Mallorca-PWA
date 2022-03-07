import { AuthService } from '../../../../../core/auth/services/auth.service';
import { Subscription } from 'rxjs';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { StadisticType } from 'src/app/shared/enums/stadistic-type';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit, OnDestroy {
  nameLists: string[] = [];
  roleUser: string = '';
  sub: Subscription;
  listTitle: string;
  typeCompetition: string;

  constructor(
    private authService: AuthService, 
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.nameLists = Object.keys(StadisticType).map(key => StadisticType[key]);
    this.sub = this.authService.user$.subscribe(user => this.roleUser = user.role);
    this.activatedRoute.params.subscribe(params => {
      this.listTitle = this.router.url.split('/').slice(3).join();
      this.typeCompetition = this.router.url.split('/')[2];
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}

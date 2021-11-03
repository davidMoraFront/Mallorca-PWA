import { AuthService } from './../../../../core/auth/services/auth.service';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Role } from 'src/app/core/auth/enums/role';
import { StadisticType } from 'src/app/shared/enums/stadistic-type';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit, OnDestroy {
  nameLists: string[] = [];
  roleUser: string = Role.SUSCRIPTOR;
  sub: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.nameLists = Object.keys(StadisticType).map(key => StadisticType[key]);
    this.sub = this.authService.user$.subscribe(user => this.roleUser = user.role);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}

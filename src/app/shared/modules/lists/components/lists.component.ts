import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/core/auth/enums/role';
import { StadisticType } from 'src/app/shared/enums/stadistic-type';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  nameLists: string[] = [];
  roleUser: string = Role.SUSCRIPTOR;

  constructor() { }

  ngOnInit(): void {
    this.nameLists = Object.keys(StadisticType).map(key => StadisticType[key]);
    this.roleUser = localStorage.getItem('role');
  }

}

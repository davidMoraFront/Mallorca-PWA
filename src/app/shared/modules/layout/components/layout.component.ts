import { SpinnerService } from './../../spinner/services/spinner.service';
import { Component, OnInit } from '@angular/core';
import { Position } from 'src/app/shared/enums/position';
import { StadisticType } from 'src/app/shared/enums/stadistic-type';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isLoading$ = this.spinnerService.isLoading$;

  constructor(private spinnerService: SpinnerService, public translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');
    translate.use('es');
   }

  ngOnInit(): void {
  }

}
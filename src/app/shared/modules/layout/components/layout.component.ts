import { SpinnerService } from './../../spinner/services/spinner.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isLoading$ = this.spinnerService.isLoading$;

  constructor(private spinnerService: SpinnerService) {}

  ngOnInit(): void {
  }

}
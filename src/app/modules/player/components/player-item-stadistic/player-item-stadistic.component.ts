import { Component, OnInit, Input, Output, ElementRef, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { Stadistic } from "src/app/shared/interfaces/stadistic";
import { Player } from 'src/app/shared/interfaces/player';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-player-item-stadistic',
  templateUrl: './player-item-stadistic.component.html',
  styleUrls: ['./player-item-stadistic.component.scss']
})
export class PlayerItemStadisticComponent implements OnInit, OnChanges {
  @Input() stadistic: Stadistic;
  @Input() indexPosition: number;
  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  @Input() detail: boolean;
  @Input() edit: boolean;
  cancel: boolean = false;
  save: boolean = false;
  previousValue: number;
  players: Player[] = [];
  stadisticName: string = '';
  roleUser: string = '';

  constructor(private el: ElementRef, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.stadisticName = this.router.url.split('/').slice(4).join();
    if (this.stadistic.name === 'time') {
      this.previousValue = this.stadistic.value;
    }
    this.roleUser = localStorage.getItem('role');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.stadistic.firstChange === false) this.stadistic.value = changes.stadistic.previousValue.value;
  }

  sum() {
    this.stadistic.value++;
  }

  subtraction() {
    if (this.stadistic.value > 0) this.stadistic.value--;
  }

  onBlurEvent(event: any) {
    this.stadistic.value = event.target.value;
  }

  editInput(event: Event) {
    if (!this.cancel) {
      document.getElementById('time')!.removeAttribute('disabled');
      document.getElementById('time')!.focus();
    } else {
      this.stadistic.value = this.previousValue;
      document.getElementById('time')!.setAttribute('disabled', 'disabled');
    }
    event.preventDefault();
    this.cancel = this.cancel ? false : true;
    this.save = this.save ? false : true;
  }

  saveInput() {
    this.valueChange.emit(this.stadistic.value);
  }
}

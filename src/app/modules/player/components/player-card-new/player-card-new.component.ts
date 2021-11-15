import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Stadistic } from './../../../../shared/interfaces/stadistic';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Player } from 'src/app/shared/interfaces/player';
import { SpinnerService } from 'src/app/shared/modules/spinner/services/spinner.service';
import { ToastService } from 'src/app/shared/modules/toast/services/toast.service';
import { PlayerService } from '../../services/player.service';
import { Position } from 'src/app/shared/enums/position';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-player-card-new',
  templateUrl: './player-card-new.component.html',
  styleUrls: ['./player-card-new.component.scss']
})
export class PlayerCardNewComponent implements OnInit, OnDestroy {
  player: Player;
  playerDetailsForm: FormGroup;
  sub: Subscription;
  positionsList: number[] = [];
  positions: Position[] = [];
  errorNewPlayer: string = 'You must fill in all the required fields';
  successNewPlayer: string = 'Profile successfully created';
  stadistics: Stadistic[] = [
    { name: "total-matches", value: 0 },
    { name: "league-matches", value: 0 },
    { name: "friendly-matches", value: 0 },
    { name: "won-matches", value: 0 },
    { name: "tied-matches", value: 0 },
    { name: "lost-matches", value: 0 },
    { name: "titular-player", value: 0 },
    { name: "substitute-player", value: 0 },
    { name: "goals", value: 0 },
    { name: "shot-penalty", value: 0 },
    { name: "goals-penalty", value: 0 },
    { name: "provoked-penalty", value: 0 },
    { name: "penalties-saved", value: 0 },
    { name: "yellow-cards", value: 0 },
    { name: "red-cards", value: 0 },
    { name: "goal-against", value: 0 },
    { name: "assistance", value: 0 },
    { name: "time", value: 0 },
  ];
  error: boolean = false;

  constructor(private playerService: PlayerService,
    private fb: FormBuilder,
    private spinnerService: SpinnerService,
    private toastService: ToastService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private translateService: TranslateService) { }

  ngOnInit(): void {
    this.spinnerService.show()
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.positions = Object.keys(Position).map(key => Position[key]);
      this.reset();
      this.spinnerService.hide();
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    
  }

  reset() {
    this.playerDetailsForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      position: ['', Validators.required],
      image: [''],
      stadistics: this.fb.array(this.stadistics)
    });
  }

  save() {
    if (this.playerDetailsForm.value.name !== '' && this.playerDetailsForm.value.position !== '') {
      this.playerDetailsForm.value.id = this.playerService.createId();
      this.playerService.addPlayer(this.playerDetailsForm.value);
      this.router.navigate(['players']);
      this.toastService.showSuccess(this.translateService.instant(this.successNewPlayer));
    } else {
      this.error = true;
      this.toastService.showError(this.translateService.instant(this.errorNewPlayer));
    }
  }

}

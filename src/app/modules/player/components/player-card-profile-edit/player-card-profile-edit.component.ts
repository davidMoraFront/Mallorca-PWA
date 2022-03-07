import { OnDestroy } from '@angular/core';
import { SpinnerService } from './../../../../shared/modules/spinner/services/spinner.service';
import { Subscription } from 'rxjs';
import { PlayerService } from './../../services/player.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Position } from 'src/app/shared/enums/position';
import { ToastService } from 'src/app/shared/modules/toast/services/toast.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/shared/interfaces/player';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-player-card-profile-edit',
  templateUrl: './player-card-profile-edit.component.html',
  styleUrls: ['./player-card-profile-edit.component.scss']
})
export class PlayerCardProfileEditComponent implements OnInit, OnDestroy {
  id: string = '';
  profileForm: FormGroup;
  positions: Position[] = [];
  subs: Subscription[] = [];
  successEditProfile: string = 'Profile successfully updated';
  errorEditProfile: string = 'You must fill in all the required fields';
  error: boolean = false;
  typeCompetition: string;

  constructor(private activatedRoute: ActivatedRoute, 
              private playerService: PlayerService,
              private toastService: ToastService,
              private fb: FormBuilder,
              private spinnerService: SpinnerService,
              private translateService: TranslateService,
              private router: Router) { }

  ngOnInit(): void {
    this.subs.push(this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      this.typeCompetition = this.router.url.split('/')[2];
    }));
    this.subs.push(this.playerService.getPlayer(this.id, this.typeCompetition).subscribe(player => {
      this.positions = Object.keys(Position).map(key => Position[key]);
      this.reset();
      
      this.spinnerService.hide();
      this.fillForm(player);
    }));
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.spinnerService.show(), 0);
  }

  ngOnDestroy(): void {
    this.subs.map(sub => sub.unsubscribe());
  }

  reset() {
    this.profileForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      position: ['', Validators.required],
      image: ['']
    });
  }

  fillForm(player: Player) {
    this.profileForm.reset({
      id: player.id,
      name: player.name,
      position: player.position,
      //image: player.image
    });
  }

  save() {
    if (this.profileForm.value.name !== '' && this.profileForm.value.position !== '') {
      this.playerService.updatePlayer(this.id, this.profileForm.value, this.typeCompetition);
      history.back();
      this.toastService.showSuccess(this.translateService.instant(this.successEditProfile));
    } else {
      this.error = true;
      this.toastService.showError(this.translateService.instant(this.errorEditProfile));
    }
  }

}

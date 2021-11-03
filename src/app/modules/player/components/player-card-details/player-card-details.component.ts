import { AuthService } from 'src/app/core/auth/services/auth.service';
import { ToastService } from './../../../../shared/modules/toast/services/toast.service';
import { AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { Player } from "src/app/shared/interfaces/player";
import { Stadistic } from "src/app/shared/interfaces/stadistic";
import { SpinnerService } from "src/app/shared/modules/spinner/services/spinner.service";
import { PlayerService } from "../../services/player.service";
import { Order } from 'src/app/shared/enums/order';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { Role } from 'src/app/core/auth/enums/role';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-player-card-details',
  templateUrl: './player-card-details.component.html',
  styleUrls: ['./player-card-details.component.scss']
})
export class PlayerCardDetailsComponent implements OnInit, AfterViewInit, OnDestroy {
  id: string = '';
  edit: boolean = false;
  player: Player;
  playerDetailsForm: FormGroup;
  dataStadistics: Stadistic[];
  subs: Subscription[] = [];
  players: Player[] = [];
  positionsList: number[] = [];
  role: Role = Role.SUSCRIPTOR;
  isEditable: boolean = false;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private playerService: PlayerService,
    private fb: FormBuilder,
    private spinnerService: SpinnerService,
    private authService: AuthService) {}

  ngOnInit(): void {
    this.subs.push(this.activatedRoute.params.subscribe(params => {
      this.isEditable = this.router.url.split('/').slice(1, 2).join() === 'profile';
    }));
    this.subs.push(this.activatedRoute.params.subscribe(params => this.id = params.id));
    this.subs.push(this.playerService.getPlayer(this.id).subscribe(res => {
      this.player = res;
      this.dataStadistics = res.stadistics;
      this.reset();
      this.fillForm(this.player);
      this.spinnerService.hide();
      this.positionsList.length = 0;
      this.dataStadistics.map(stad => this.positionListPlayer(stad.name));
    }));
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.spinnerService.show(), 0);
  }

  ngOnDestroy(): void {
    this.subs.map(sub => sub.unsubscribe());
  }

  addStadistic(el: Stadistic): FormGroup {
    return this.fb.group({
      name: this.fb.control(el.name),
      value: this.fb.control(el.value)
    });
  }

  resetStadistic(): FormGroup {
    return this.fb.group({
      name: '',
      value: ''
    });
  }

  reset() {
    this.playerDetailsForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      position: ['', Validators.required],
      image: [''],
      stadistics: this.fb.array([])
    });
  }

  get stadistics() {
    return (this.playerDetailsForm.get('stadistics') as FormArray).controls;
  }

  fillForm(player: Player) {
    this.playerDetailsForm.reset({
      id: player.id,
      name: player.name,
      position: player.position,
      image: player.image,
      stadistics: []
    });
    this.dataStadistics.map(el => this.stadistics.push(this.addStadistic(el)));
  }

  onSubmit() {
    this.playerService.updatePlayer(this.id, this.playerDetailsForm.value);
  }

  positionListPlayer(stadisticName: string): number[] {
    this.subs.push(this.playerService.getPlayers().subscribe(stadOpt => {
      this.players = stadOpt.sort((a, b) => this.compare(a.stadistics.find(el => el.name === stadisticName ? el : '')!,
        b.stadistics.find(el => el.name === stadisticName ? el : '')!, Order.DES));
        this.positionsList.push(this.players.findIndex(player => player.id === this.player.id) + 1);
    }));
    return this.positionsList;
  }

  compare(a: Stadistic, b: Stadistic, order: string): number {
    return order === Order.ASC ? a.value - b.value : b.value - a.value;
  }

}

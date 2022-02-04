import { AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { Player } from "src/app/shared/interfaces/player";
import { Stadistic } from "src/app/shared/interfaces/stadistic";
import { SpinnerService } from "src/app/shared/modules/spinner/services/spinner.service";
import { PlayerService } from "../../services/player.service";
import { Order } from 'src/app/shared/enums/order';


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
  playersSort: Player[] = [];
  roleUser: string = '';
  isEditable: boolean = false;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private playerService: PlayerService,
    private fb: FormBuilder,
    private spinnerService: SpinnerService) {}

  ngOnInit(): void {
    this.subs.push(this.activatedRoute.params.subscribe(params => {
      this.isEditable = this.router.url.split('/').slice(2, 3).join() === 'profile';
    }));
    this.subs.push(this.activatedRoute.params.subscribe(params => this.id = params.id));
    this.subs.push(this.playerService.getPlayers().subscribe(res => this.players = res));
    this.subs.push(this.playerService.getPlayer(this.id).subscribe(res => {
      this.player = res;
      this.dataStadistics = res.stadistics;
      this.reset();
      this.fillForm(this.player);
      this.spinnerService.hide();
    }));
    this.roleUser = localStorage.getItem('role');
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.spinnerService.show(), 0);
  }

  ngOnDestroy(): void {
    this.subs.map(sub => sub.unsubscribe());
  }

  addStadistic(el: Stadistic, index: number): FormGroup {
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
    this.dataStadistics.map((el, index) => this.stadistics.push(this.addStadistic(el, index))); // Add propertry
  }

  onSubmit() {
    this.playerService.updatePlayer(this.id, this.playerDetailsForm.value);
  }

}

import { SpinnerService } from './../../../../shared/modules/spinner/services/spinner.service';
import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Order } from "src/app/shared/enums/order";
import { Player } from "src/app/shared/interfaces/player";
import { Stadistic } from "src/app/shared/interfaces/stadistic";
import { PlayerService } from "../../services/player.service";
import { Position } from 'src/app/shared/enums/position';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit, AfterViewInit {
  players: Player[];
  listTitle: string = '';

  constructor(private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private playerService: PlayerService, 
    private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let list = this.router.url.split('/').slice(1).join();
      this.listTitle = list;
    });

    if (this.listTitle !== 'players') {
      this.playerService.getPlayers().subscribe(res => {
        this.players = res.sort((a, b) => this.compare(a.stadistics.find(el => el.name === this.listTitle ? el : '')!,
          b.stadistics.find(el => el.name === this.listTitle ? el : '')!, Order.DES));
          this.spinnerService.hide();
      });
    } else {
      this.playerService.getPlayers().subscribe(res => {
        const orderEnum = [];
        for (let key in Position) {
          orderEnum.push(key);
        }
        this.players = res.sort((a, b) => this.comparePos(orderEnum.findIndex(key => Position[key] === a.position), 
          orderEnum.findIndex(key => Position[key] === b.position), Order.ASC));
          this.spinnerService.hide();
      });
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.spinnerService.show(), 0);
  }

  compare(a: Stadistic, b: Stadistic, order: string): number {
    return order === Order.ASC ? a.value - b.value : b.value - a.value;
  }

  comparePos(a: number, b: number, order: string): number {
    return order === Order.ASC ? a - b : b - a;
  }
}

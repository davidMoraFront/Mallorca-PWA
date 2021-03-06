import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { Player } from 'src/app/shared/interfaces/player';
import { ToastService } from 'src/app/shared/modules/toast/services/toast.service';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player-card-profile',
  templateUrl: './player-card-profile.component.html',
  styleUrls: ['./player-card-profile.component.scss']
})
export class PlayerCardProfileComponent implements OnInit {
  @Input() player: Player;
  deleteMessage: string = 'Player deleted successfully';
  modalTitle: string = 'Delete to';
  modalBody: string = 'Are you sure you want to delete the player? This action will delete the player from all listings.';
  sub: Subscription;
  typeCompetition: string;

  constructor(private playerService: PlayerService, 
              private modalService: NgbModal,
              private toastService: ToastService,
              private router: Router,
              private translateService: TranslateService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.typeCompetition = this.router.url.split('/')[2];
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  edit(player: Player) {
    this.router.navigate(['competition', this.typeCompetition, 'list', 'profile', player.id, 'edit']);
  }

  delete(player: Player) {
    const modalRef = this.modalService.open(ModalComponent, { centered: true });
    modalRef.componentInstance.data = player;
    modalRef.componentInstance.modalTitle = this.translateService.instant(this.modalTitle) + player.name;
    modalRef.componentInstance.modalBody = this.translateService.instant(this.modalBody);
    modalRef.result.then(resp => {
      if (resp) {
        this.playerService.deletePlayer(player.id, this.typeCompetition);
        this.toastService.showSuccess(this.translateService.instant(this.deleteMessage));
      }
    });
  }

}

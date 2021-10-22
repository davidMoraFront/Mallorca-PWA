import { PlayerCardProfileEditComponent } from './components/player-card-profile-edit/player-card-profile-edit.component';
import { AuthGuard } from '../../core/auth/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerCardDetailsComponent } from './components/player-card-details/player-card-details.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { ListsComponent } from 'src/app/shared/modules/lists/components/lists.component';
import { PlayerCardNewComponent } from './components/player-card-new/player-card-new.component';

const routes: Routes = [
  { path: '', component: ListsComponent },
  { path: 'total-matches', component: PlayerListComponent},
  { path: 'league-matches', component: PlayerListComponent},
  { path: 'friendly-matches', component: PlayerListComponent },
  { path: 'won-matches', component: PlayerListComponent },
  { path: 'tied-matches', component: PlayerListComponent },
  { path: 'lost-matches', component: PlayerListComponent },
  { path: 'titular-player', component: PlayerListComponent },
  { path: 'substitute-player', component: PlayerListComponent},
  { path: 'time', component: PlayerListComponent },
  { path: 'goals', component: PlayerListComponent },
  { path: 'shot-penalty', component: PlayerListComponent },
  { path: 'goals-penalty', component: PlayerListComponent },
  { path: 'provoked-penalty', component: PlayerListComponent },
  { path: 'penalties-saved', component: PlayerListComponent },
  { path: 'yellow-cards', component: PlayerListComponent },
  { path: 'red-cards', component: PlayerListComponent },
  { path: 'sanctions-matches', component: PlayerListComponent },
  { path: 'assistance', component: PlayerListComponent },
  { path: 'players', component: PlayerListComponent, canActivate: [AuthGuard] },
  { path: 'players/create', component: PlayerCardNewComponent, canActivate: [AuthGuard] },
  { path: 'players/:id', component: PlayerCardDetailsComponent },
  { path: 'profile/:id', component: PlayerCardDetailsComponent, canActivate: [AuthGuard] },
  { path: 'profile/:id/edit', component: PlayerCardProfileEditComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }

import { PlayerCardProfileEditComponent } from './components/player-card-profile-edit/player-card-profile-edit.component';
import { AuthGuard } from '../../core/auth/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerCardDetailsComponent } from './components/player-card-details/player-card-details.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { ListsComponent } from 'src/app/shared/modules/lists/components/lists/lists.component';
import { PlayerCardNewComponent } from './components/player-card-new/player-card-new.component';
import { CompetitionComponent } from 'src/app/shared/modules/lists/components/competition/competition.component';

const routes: Routes = [
  { path: '', component: CompetitionComponent },
  { path: 'historical/list', component: ListsComponent },
  { path: 'historical/list/total-matches', component: PlayerListComponent},
  { path: 'historical/list/league-matches', component: PlayerListComponent},
  { path: 'historical/list/friendly-matches', component: PlayerListComponent },
  { path: 'historical/list/won-matches', component: PlayerListComponent },
  { path: 'historical/list/tied-matches', component: PlayerListComponent },
  { path: 'historical/list/lost-matches', component: PlayerListComponent },
  { path: 'historical/list/titular-player', component: PlayerListComponent },
  { path: 'historical/list/substitute-player', component: PlayerListComponent},
  { path: 'historical/list/time', component: PlayerListComponent },
  { path: 'historical/list/goals', component: PlayerListComponent },
  { path: 'historical/list/shot-penalty', component: PlayerListComponent },
  { path: 'historical/list/goals-penalty', component: PlayerListComponent },
  { path: 'historical/list/penalties-against', component: PlayerListComponent },
  { path: 'historical/list/penalties-saved', component: PlayerListComponent },
  { path: 'historical/list/yellow-cards', component: PlayerListComponent },
  { path: 'historical/list/red-cards', component: PlayerListComponent },
  { path: 'historical/list/goal-against', component: PlayerListComponent },
  { path: 'historical/list/assistance', component: PlayerListComponent },
  { path: 'historical/list/players', component: PlayerListComponent, canActivate: [AuthGuard] },
  { path: 'historical/list/players/create', component: PlayerCardNewComponent, canActivate: [AuthGuard] },
  { path: 'historical/list/players/:id', component: PlayerCardDetailsComponent },
  { path: 'historical/list/profile/:id', component: PlayerCardDetailsComponent, canActivate: [AuthGuard] },
  { path: 'historical/list/profile/:id/edit', component: PlayerCardProfileEditComponent, canActivate: [AuthGuard] },
  { path: 'players/list', component: ListsComponent },
  { path: 'players/list/total-matches', component: PlayerListComponent},
  { path: 'players/list/league-matches', component: PlayerListComponent},
  { path: 'players/list/friendly-matches', component: PlayerListComponent },
  { path: 'players/list/won-matches', component: PlayerListComponent },
  { path: 'players/list/tied-matches', component: PlayerListComponent },
  { path: 'players/list/lost-matches', component: PlayerListComponent },
  { path: 'players/list/titular-player', component: PlayerListComponent },
  { path: 'players/list/substitute-player', component: PlayerListComponent},
  { path: 'players/list/time', component: PlayerListComponent },
  { path: 'players/list/goals', component: PlayerListComponent },
  { path: 'players/list/shot-penalty', component: PlayerListComponent },
  { path: 'players/list/goals-penalty', component: PlayerListComponent },
  { path: 'players/list/penalties-against', component: PlayerListComponent },
  { path: 'players/list/penalties-saved', component: PlayerListComponent },
  { path: 'players/list/yellow-cards', component: PlayerListComponent },
  { path: 'players/list/red-cards', component: PlayerListComponent },
  { path: 'players/list/goal-against', component: PlayerListComponent },
  { path: 'players/list/assistance', component: PlayerListComponent },
  { path: 'players/list/players', component: PlayerListComponent, canActivate: [AuthGuard] },
  { path: 'players/list/players/create', component: PlayerCardNewComponent, canActivate: [AuthGuard] },
  { path: 'players/list/players/:id', component: PlayerCardDetailsComponent },
  { path: 'players/list/profile/:id', component: PlayerCardDetailsComponent, canActivate: [AuthGuard] },
  { path: 'players/list/profile/:id/edit', component: PlayerCardProfileEditComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }

import { AuthGuard } from './../../core/auth/guards/auth.guard';
import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerRoutingModule } from './player-routing.module';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { PlayerCardDetailsComponent } from './components/player-card-details/player-card-details.component';
import { PlayerIconComponent } from './components/player-icon/player-icon.component';
import { PlayerItemStadisticComponent } from './components/player-item-stadistic/player-item-stadistic.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerPositionComponent } from './components/player-position/player-position.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerCardNewComponent } from './components/player-card-new/player-card-new.component';
import { PlayerCardProfileComponent } from './components/player-card-profile/player-card-profile.component';
import { PlayerCardProfileEditComponent } from './components/player-card-profile-edit/player-card-profile-edit.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    PlayerCardComponent,
    PlayerCardDetailsComponent,
    PlayerIconComponent,
    PlayerItemStadisticComponent,
    PlayerListComponent,
    PlayerPositionComponent,
    PlayerCardNewComponent,
    PlayerCardProfileComponent,
    PlayerCardProfileEditComponent
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    TranslateModule
  ],
  exports: [
    PlayerCardComponent,
    PlayerCardDetailsComponent,
    PlayerIconComponent,
    PlayerPositionComponent,
    PlayerItemStadisticComponent,
    PlayerListComponent,
    PlayerCardProfileComponent
  ],
  providers: [AuthGuard]
})
export class PlayerModule { }

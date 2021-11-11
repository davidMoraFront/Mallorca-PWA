import { SpinnerModule } from './../spinner/spinner.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout.component';
import { LayoutRoutingModule } from './layout-routing.modules';
import { SharedModule } from '../../shared.module';
import { PlayerModule } from 'src/app/modules/player/player.module';
import { ListsModule } from '../lists/lists.module';
import { ToastModule } from '../toast/toast.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    PlayerModule,
    SpinnerModule,
    ToastModule,
    ListsModule
  ]
})
export class LayoutModule { }

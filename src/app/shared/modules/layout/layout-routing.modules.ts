import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout.component';

const routes: Routes = [
      { path: '', component: LayoutComponent, children: [
        { path: '', loadChildren: () => import('./../../../modules/player/player.module').then((m) => m.PlayerModule) }
      ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

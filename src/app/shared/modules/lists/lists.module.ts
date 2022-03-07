import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './components/lists/lists.component';
import { CompetitionComponent } from './components/competition/competition.component';

@NgModule({
  declarations: [ListsComponent, CompetitionComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  exports: [ListsComponent, CompetitionComponent]
})
export class ListsModule { }

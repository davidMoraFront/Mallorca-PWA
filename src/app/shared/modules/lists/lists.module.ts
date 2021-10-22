import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './components/lists.component';

@NgModule({
  declarations: [ListsComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  exports: [ListsComponent]
})
export class ListsModule { }

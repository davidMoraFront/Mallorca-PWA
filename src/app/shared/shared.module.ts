import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    FooterComponent, HeaderComponent, ModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  exports: [FooterComponent, HeaderComponent, ModalComponent]
})
export class SharedModule { }

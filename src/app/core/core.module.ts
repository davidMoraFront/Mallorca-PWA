import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailVerificationComponent } from './auth/components/email-verification/email-verification.component';
import { ForgotPaswordComponent } from './auth/modules/forgot-password/components/forgot-pasword.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    EmailVerificationComponent,
    ForgotPaswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: []
})
export class CoreModule { }

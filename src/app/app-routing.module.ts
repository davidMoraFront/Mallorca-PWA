import { EmailVerificationComponent } from './core/auth/components/email-verification/email-verification.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'register', loadChildren: () => import('./core/auth/modules/register/register.module').then((m) => m.RegisterModule)},
  { path: 'login', loadChildren: () => import('./core/auth/modules/login/login.module').then((m) => m.LoginModule)},
  { path: 'email-verification', component: EmailVerificationComponent},
  { path: 'forgot-password', loadChildren: () => import('./core/auth/modules/forgot-password/forgot-password.module').then((m) => m.ForgotPasswordModule)},
  { path: 'competition', loadChildren: () => import('./shared/modules/layout/layout.module').then((m) => m.LayoutModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

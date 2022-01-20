import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
const routes: Routes = [
  { path: 'login', component:LoginComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'reset/:token', component: ResetPasswordComponent},
  { path: '' , redirectTo: 'login', pathMatch: 'full'},
  { path: 'forgot', component: ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

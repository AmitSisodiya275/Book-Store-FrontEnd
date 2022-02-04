import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { AuthGuard } from './guard/auth.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { MyWishlistComponent } from './components/my-wishlist/my-wishlist.component';
const routes: Routes = [
  { path: 'login', component:LoginComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'reset/:token', component: ResetPasswordComponent},
  { path: '' , redirectTo: 'login', pathMatch: 'full'},
  { path: 'forgot', component: ForgotPasswordComponent},
  { path: 'dashboard',component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'book/:id', component: BookDetailsComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'my-cart', component:MyCartComponent},
  { path: 'my-wishlist', component:MyWishlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

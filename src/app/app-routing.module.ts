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
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';
import { DonateBookComponent } from './components/donate-book/donate-book.component';
import { DonateSuccessComponent } from './components/donate-success/donate-success.component';
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
  { path: 'my-wishlist', component:MyWishlistComponent},
  { path: 'my-orders', component:MyOrdersComponent},
  { path: 'order-successfull/:orderId', component:OrderSuccessComponent},
  { path: 'add-book', component:AddBookComponent},
  { path: 'update-book', component:UpdateBookComponent},
  { path: 'donate-book', component:DonateBookComponent},
  { path: 'donate-success', component:DonateSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

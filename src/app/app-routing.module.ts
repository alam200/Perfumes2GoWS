
import { OrderDetailsComponent } from './core/orders/order-details/order-details.component';
import { OrdersListComponent } from './core/orders/orders-list/orders-list.component';
import { ListAddressesComponent } from './core/users/list-addresses/list-addresses.component';
import { AddAddressComponent } from './core/users/add-address/add-address.component';
import { UploadProductsComponent } from './core/products/upload-products/upload-products.component';
import { AddVendorComponent } from './core/vendors/add-vendor/add-vendor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from './core/products/list-products/list-products.component';
import { RegisterComponent } from './core/users/register/register.component';
import { CartDetailsComponent } from './core/cart/cart-details/cart-details.component';
import { AddProductComponent } from './core/products/add-product/add-product.component';
import { LoginComponent } from './core/users/login/login.component';
import { OrderPlacedComponent } from './core/orders/order-placed/order-placed.component';
import { ForgetPasswordComponent } from './core/users/forget-password/forget-password.component';
import { AuthGuardService as AuthGuard } from './services/auth.guard.service';
import { AdminGuardService as AdminGuard } from './services/admin.guard.service';
import { ResetPasswordComponent } from './core/users/reset-password/reset-password.component';
import { MessageComponent } from './core/users/core/users/message/message.component';
import { AboutusComponent } from './core/faq/aboutus/aboutus.component';
import { ContactusComponent } from './core/faq/contactus/contactus.component';
import { AddUserComponent } from './core/users/add-user/add-user.component';
import { ListUsersComponent } from './core/users/list-users/list-users.component';
import { VendorsListComponent } from './core/vendors/vendors-list/vendors-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/user/login', pathMatch: 'full' },
  { path: 'users', component: ListUsersComponent },
  { path: 'user-details/:userCode', component: AddUserComponent },
  { path: 'products/special', component: ListProductsComponent },
  { path: 'products/new', component: ListProductsComponent },
  { path: 'products', component: ListProductsComponent },
  { path: 'list-product', component: ListProductsComponent, canActivate: [AuthGuard] },
  { path: 'user/register', component: RegisterComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'user/forgot', component: ForgetPasswordComponent },
  { path: 'user/verify/:token', component: MessageComponent },
  { path: 'user/reset/:token', component: ResetPasswordComponent },
  { path: 'user/details', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'order', component: CartDetailsComponent },
  { path: 'add-vendor', component: AddVendorComponent, canActivate: [AdminGuard] },
  { path: 'vendors', component:  VendorsListComponent},
  { path: 'add-product', component: AddProductComponent, canActivate: [AdminGuard] },
  { path: 'product-details/:sku', component: AddProductComponent, canActivate: [AdminGuard] },
  { path: 'upload-products', component: UploadProductsComponent, canActivate: [AdminGuard] },
  { path: 'addresses', component: ListAddressesComponent, canActivate: [AuthGuard] },
  { path: 'addresses/add-address', component: AddAddressComponent, canActivate: [AuthGuard] },
  { path: 'addresses/edit-address/:addressId', component: AddAddressComponent, canActivate: [AuthGuard] },
  { path: 'orders', component: OrdersListComponent, canActivate: [AdminGuard] },
  { path: 'orders/order-details/:orderId', component: OrderDetailsComponent, canActivate: [AdminGuard] },
  { path: 'order-placed', component: OrderPlacedComponent, canActivate: [AuthGuard] },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

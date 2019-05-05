import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { FileUploadModule } from 'ng2-file-upload';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './common/alert/alert.component';
import { AlertService } from './common/alert/alert.service';
import { FooterComponent } from './common/footer/footer.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { CartDetailsComponent } from './core/cart/cart-details/cart-details.component';
import { OrderStatusComponent } from './core/cart/order-status/order-status.component';
import { OrderDetailsComponent } from './core/orders/order-details/order-details.component';
import { OrderPlacedComponent } from './core/orders/order-placed/order-placed.component';
import { OrdersListComponent } from './core/orders/orders-list/orders-list.component';
import { AddProductComponent } from './core/products/add-product/add-product.component';
import { ListProductsComponent } from './core/products/list-products/list-products.component';
import { UploadProductsComponent } from './core/products/upload-products/upload-products.component';
import { AddAddressComponent } from './core/users/add-address/add-address.component';
import { ContactInfoComponent } from './core/users/contact-info/contact-info.component';
import { ForgetPasswordComponent } from './core/users/forget-password/forget-password.component';
import { ListAddressesComponent } from './core/users/list-addresses/list-addresses.component';
import { LoginComponent } from './core/users/login/login.component';
import { RegisterComponent } from './core/users/register/register.component';
import { EqualValidatorDirective } from './directives/equal-validator.directive';
import { AdminGuardService } from './services/admin.guard.service';
import { AuthGuardService } from './services/auth.guard.service';
import { HttpsRequestInterceptor } from './services/http.request.interceptor';
import { SessionService } from './services/session.service';
import { MessageComponent } from './core/users/core/users/message/message.component';
import { ResetPasswordComponent } from './core/users/reset-password/reset-password.component';
import { AboutusComponent } from './core/faq/aboutus/aboutus.component';
import { ContactusComponent } from './core/faq/contactus/contactus.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    AddProductComponent,
    CartDetailsComponent,
    RegisterComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ContactInfoComponent,
    AddAddressComponent,
    ListAddressesComponent,
    OrderStatusComponent,
    NavbarComponent,
    FooterComponent,
    ListProductsComponent,
    UploadProductsComponent,
    OrdersListComponent,
    OrderDetailsComponent,
    OrderPlacedComponent,
    EqualValidatorDirective,
    MessageComponent,
    ResetPasswordComponent,
    AboutusComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    DataTablesModule,
    HttpClientModule,
    FileUploadModule,
    NgxSpinnerModule,
    NgSelectModule,
    NgImageSliderModule
  ],
  providers: [
    AlertService,
    AuthGuardService,
    AdminGuardService,
    SessionService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

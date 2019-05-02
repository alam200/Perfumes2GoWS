(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _core_orders_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/orders/order-details/order-details.component */ "./src/app/core/orders/order-details/order-details.component.ts");
/* harmony import */ var _core_orders_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/orders/orders-list/orders-list.component */ "./src/app/core/orders/orders-list/orders-list.component.ts");
/* harmony import */ var _core_users_list_addresses_list_addresses_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/users/list-addresses/list-addresses.component */ "./src/app/core/users/list-addresses/list-addresses.component.ts");
/* harmony import */ var _core_users_add_address_add_address_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/users/add-address/add-address.component */ "./src/app/core/users/add-address/add-address.component.ts");
/* harmony import */ var _core_products_upload_products_upload_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/products/upload-products/upload-products.component */ "./src/app/core/products/upload-products/upload-products.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_products_list_products_list_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/products/list-products/list-products.component */ "./src/app/core/products/list-products/list-products.component.ts");
/* harmony import */ var _core_users_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/users/register/register.component */ "./src/app/core/users/register/register.component.ts");
/* harmony import */ var _core_cart_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/cart/cart-details/cart-details.component */ "./src/app/core/cart/cart-details/cart-details.component.ts");
/* harmony import */ var _core_products_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/products/add-product/add-product.component */ "./src/app/core/products/add-product/add-product.component.ts");
/* harmony import */ var _core_users_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/users/login/login.component */ "./src/app/core/users/login/login.component.ts");
/* harmony import */ var _core_orders_order_placed_order_placed_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/orders/order-placed/order-placed.component */ "./src/app/core/orders/order-placed/order-placed.component.ts");
/* harmony import */ var _core_users_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/users/forget-password/forget-password.component */ "./src/app/core/users/forget-password/forget-password.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth.guard.service */ "./src/app/services/auth.guard.service.ts");
/* harmony import */ var _services_admin_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/admin.guard.service */ "./src/app/services/admin.guard.service.ts");
/* harmony import */ var _core_users_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/users/reset-password/reset-password.component */ "./src/app/core/users/reset-password/reset-password.component.ts");
/* harmony import */ var _core_users_core_users_message_message_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/users/core/users/message/message.component */ "./src/app/core/users/core/users/message/message.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products/special', component: _core_products_list_products_list_products_component__WEBPACK_IMPORTED_MODULE_7__["ListProductsComponent"] },
    { path: 'products/new', component: _core_products_list_products_list_products_component__WEBPACK_IMPORTED_MODULE_7__["ListProductsComponent"] },
    { path: 'products', component: _core_products_list_products_list_products_component__WEBPACK_IMPORTED_MODULE_7__["ListProductsComponent"] },
    { path: 'user/register', component: _core_users_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    { path: 'user/login', component: _core_users_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
    { path: 'user/forgot', component: _core_users_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_13__["ForgetPasswordComponent"] },
    { path: 'user/verify/:token', component: _core_users_core_users_message_message_component__WEBPACK_IMPORTED_MODULE_17__["MessageComponent"] },
    { path: 'user/reset/:token', component: _core_users_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_16__["ResetPasswordComponent"] },
    { path: 'user/details', component: _core_users_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuardService"]] },
    { path: 'order', component: _core_cart_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_9__["CartDetailsComponent"] },
    { path: 'add-product', component: _core_products_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_10__["AddProductComponent"], canActivate: [_services_admin_guard_service__WEBPACK_IMPORTED_MODULE_15__["AdminGuardService"]] },
    { path: 'product-details/:sku', component: _core_products_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_10__["AddProductComponent"], canActivate: [_services_admin_guard_service__WEBPACK_IMPORTED_MODULE_15__["AdminGuardService"]] },
    { path: 'upload-products', component: _core_products_upload_products_upload_products_component__WEBPACK_IMPORTED_MODULE_4__["UploadProductsComponent"], canActivate: [_services_admin_guard_service__WEBPACK_IMPORTED_MODULE_15__["AdminGuardService"]] },
    { path: 'addresses', component: _core_users_list_addresses_list_addresses_component__WEBPACK_IMPORTED_MODULE_2__["ListAddressesComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuardService"]] },
    { path: 'addresses/add-address', component: _core_users_add_address_add_address_component__WEBPACK_IMPORTED_MODULE_3__["AddAddressComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuardService"]] },
    { path: 'addresses/edit-address/:addressId', component: _core_users_add_address_add_address_component__WEBPACK_IMPORTED_MODULE_3__["AddAddressComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuardService"]] },
    { path: 'orders', component: _core_orders_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_1__["OrdersListComponent"], canActivate: [_services_admin_guard_service__WEBPACK_IMPORTED_MODULE_15__["AdminGuardService"]] },
    { path: 'orders/order-details/:orderId', component: _core_orders_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_0__["OrderDetailsComponent"], canActivate: [_services_admin_guard_service__WEBPACK_IMPORTED_MODULE_15__["AdminGuardService"]] },
    { path: 'order-placed', component: _core_orders_order_placed_order_placed_component__WEBPACK_IMPORTED_MODULE_12__["OrderPlacedComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuardService"]] },
    { path: '**', component: _core_products_list_products_list_products_component__WEBPACK_IMPORTED_MODULE_7__["ListProductsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main{\n  padding: 2vw;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"body-content-wrapper\">\n    <app-alert></app-alert>\n    <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>    \n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _common_alert_alert_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/alert/alert.component */ "./src/app/common/alert/alert.component.ts");
/* harmony import */ var _common_alert_alert_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/alert/alert.service */ "./src/app/common/alert/alert.service.ts");
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/footer/footer.component */ "./src/app/common/footer/footer.component.ts");
/* harmony import */ var _common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common/navbar/navbar.component */ "./src/app/common/navbar/navbar.component.ts");
/* harmony import */ var _core_cart_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/cart/cart-details/cart-details.component */ "./src/app/core/cart/cart-details/cart-details.component.ts");
/* harmony import */ var _core_cart_order_status_order_status_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/cart/order-status/order-status.component */ "./src/app/core/cart/order-status/order-status.component.ts");
/* harmony import */ var _core_orders_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/orders/order-details/order-details.component */ "./src/app/core/orders/order-details/order-details.component.ts");
/* harmony import */ var _core_orders_order_placed_order_placed_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/orders/order-placed/order-placed.component */ "./src/app/core/orders/order-placed/order-placed.component.ts");
/* harmony import */ var _core_orders_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/orders/orders-list/orders-list.component */ "./src/app/core/orders/orders-list/orders-list.component.ts");
/* harmony import */ var _core_products_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/products/add-product/add-product.component */ "./src/app/core/products/add-product/add-product.component.ts");
/* harmony import */ var _core_products_list_products_list_products_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/products/list-products/list-products.component */ "./src/app/core/products/list-products/list-products.component.ts");
/* harmony import */ var _core_products_upload_products_upload_products_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./core/products/upload-products/upload-products.component */ "./src/app/core/products/upload-products/upload-products.component.ts");
/* harmony import */ var _core_users_add_address_add_address_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./core/users/add-address/add-address.component */ "./src/app/core/users/add-address/add-address.component.ts");
/* harmony import */ var _core_users_contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./core/users/contact-info/contact-info.component */ "./src/app/core/users/contact-info/contact-info.component.ts");
/* harmony import */ var _core_users_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./core/users/forget-password/forget-password.component */ "./src/app/core/users/forget-password/forget-password.component.ts");
/* harmony import */ var _core_users_list_addresses_list_addresses_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./core/users/list-addresses/list-addresses.component */ "./src/app/core/users/list-addresses/list-addresses.component.ts");
/* harmony import */ var _core_users_login_login_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./core/users/login/login.component */ "./src/app/core/users/login/login.component.ts");
/* harmony import */ var _core_users_register_register_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./core/users/register/register.component */ "./src/app/core/users/register/register.component.ts");
/* harmony import */ var _directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./directives/equal-validator.directive */ "./src/app/directives/equal-validator.directive.ts");
/* harmony import */ var _services_admin_guard_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/admin.guard.service */ "./src/app/services/admin.guard.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/auth.guard.service */ "./src/app/services/auth.guard.service.ts");
/* harmony import */ var _services_http_request_interceptor__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/http.request.interceptor */ "./src/app/services/http.request.interceptor.ts");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _core_users_core_users_message_message_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./core/users/core/users/message/message.component */ "./src/app/core/users/core/users/message/message.component.ts");
/* harmony import */ var _core_users_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./core/users/reset-password/reset-password.component */ "./src/app/core/users/reset-password/reset-password.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_35__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _common_alert_alert_component__WEBPACK_IMPORTED_MODULE_10__["AlertComponent"],
                _core_products_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_19__["AddProductComponent"],
                _core_cart_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_14__["CartDetailsComponent"],
                _core_users_register_register_component__WEBPACK_IMPORTED_MODULE_27__["RegisterComponent"],
                _core_users_login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"],
                _core_users_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_24__["ForgetPasswordComponent"],
                _core_users_contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_23__["ContactInfoComponent"],
                _core_users_add_address_add_address_component__WEBPACK_IMPORTED_MODULE_22__["AddAddressComponent"],
                _core_users_list_addresses_list_addresses_component__WEBPACK_IMPORTED_MODULE_25__["ListAddressesComponent"],
                _core_cart_order_status_order_status_component__WEBPACK_IMPORTED_MODULE_15__["OrderStatusComponent"],
                _common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _core_products_list_products_list_products_component__WEBPACK_IMPORTED_MODULE_20__["ListProductsComponent"],
                _core_products_upload_products_upload_products_component__WEBPACK_IMPORTED_MODULE_21__["UploadProductsComponent"],
                _core_orders_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_18__["OrdersListComponent"],
                _core_orders_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_16__["OrderDetailsComponent"],
                _core_orders_order_placed_order_placed_component__WEBPACK_IMPORTED_MODULE_17__["OrderPlacedComponent"],
                _directives_equal_validator_directive__WEBPACK_IMPORTED_MODULE_28__["EqualValidatorDirective"],
                _core_users_core_users_message_message_component__WEBPACK_IMPORTED_MODULE_33__["MessageComponent"],
                _core_users_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_34__["ResetPasswordComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploadModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_35__["NgxSpinnerModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"]
            ],
            providers: [_common_alert_alert_service__WEBPACK_IMPORTED_MODULE_11__["AlertService"],
                _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_30__["AuthGuardService"],
                _services_admin_guard_service__WEBPACK_IMPORTED_MODULE_29__["AdminGuardService"],
                _services_session_service__WEBPACK_IMPORTED_MODULE_32__["SessionService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
                    useClass: _services_http_request_interceptor__WEBPACK_IMPORTED_MODULE_31__["HttpsRequestInterceptor"],
                    multi: true,
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/alert/alert.component.css":
/*!**************************************************!*\
  !*** ./src/app/common/alert/alert.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#alert {\n    position: fixed;\n    padding: 1.5em;\n    bottom: 0.1%;\n    right: 0.1%;\n    z-index: 9999999;\n}\n"

/***/ }),

/***/ "./src/app/common/alert/alert.component.html":
/*!***************************************************!*\
  !*** ./src/app/common/alert/alert.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>\n"

/***/ }),

/***/ "./src/app/common/alert/alert.component.ts":
/*!*************************************************!*\
  !*** ./src/app/common/alert/alert.component.ts ***!
  \*************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ "./src/app/common/alert/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    /**
     *  Close message
     */
    AlertComponent.prototype.closeMessage = function () {
        this.alertService.closeMessage();
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i.toString(),
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/common/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.css */ "./src/app/common/alert/alert.component.css")]
        }),
        __metadata("design:paramtypes", [_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/common/alert/alert.service.ts":
/*!***********************************************!*\
  !*** ./src/app/common/alert/alert.service.ts ***!
  \***********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
        setTimeout(function () {
            this.closeMessage();
        }.bind(this), 5000);
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
        setTimeout(function () {
            this.closeMessage();
        }.bind(this), 15000);
    };
    AlertService.prototype.warning = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'warning', text: message });
        setTimeout(function () {
            this.closeMessage();
        }.bind(this), 10000);
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService.prototype.closeMessage = function () {
        this.subject.next();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/common/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/common/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  margin-top: 15px;\n  padding: 5px 15px;\n  position: fixed;\n  bottom: 0;\n  z-index: 5;\n  width: 100%;\n  background-color: #172337;\n  font-size: 12px;\n  color: #fff;\n}\n.social-link {\n  display: inline-block;\n  padding: 4px 0;\n  background-color: #fff;\n  margin-left: 10px;\n  border-radius: 0.1rem;\n  width: 30px;\n  text-align: center;\n  transition: all 0.3s ease-out;\n}\n.social-link:hover {\n  background-color: #e8e8e8;\n}\nfooter .footer-text {\n  padding-top: 5px;\n}\nfooter .fa {\n  font-size: 20px;\n  color: #324e97;\n}\nfooter a {\n  color: #fff;\n  transition: all 0.3s ease-out;\n}\nfooter a:hover {\n  color: #d1d1d1;\n  text-decoration: none;\n}\n/*.top-shadow {\n  -webkit-box-shadow: 0 -5px 10px 0 rgba(0,0,0,0.25);\n     -moz-box-shadow: 0 -5px 10px 0 rgba(0,0,0,0.25);\n          box-shadow: 0 -5px 10px 0 rgba(0,0,0,0.25);\n}*/\nfooter p {\n  margin-bottom: 0;\n}\n@media screen and (max-width: 575px){\n\n  footer p {\n    text-align: center !important;\n    margin-bottom: 5px;\n  }\n  .copyright {\n    margin-bottom: 10px !important;\n  }\n}\n"

/***/ }),

/***/ "./src/app/common/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer text-center no-print\">\n  <div class=\"row\">\n    <div class=\"col-md-4 col-sm-4\">\n        <p class=\"footer-text text-left\">\n          <!-- <a href=\"mailto:abc.xyz@gmail.com\" target=\"_blank\">Contact Us</a> -->\n        </p>\n    </div>\n    <div class=\"col-md-4 col-sm-4\">\n      <p class=\"footer-text text-center copyright\">\n        &#169; 2018 - Developed by\n        <a href=\"http://akros.uz\" target=\"_blank\">Akros Inc</a>\n      </p>\n    </div>\n    <div class=\"col-md-4 col-sm-4\">\n      <!-- <p class=\"text-right\">\n        <a href=\"#\" class=\"social-link\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a>\n        <a href=\"#\" class=\"social-link\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a>\n      </p> -->\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/common/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/common/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/common/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/common/navbar/navbar.component.css":
/*!****************************************************!*\
  !*** ./src/app/common/navbar/navbar.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n          z-index: 10;\n          background-color: #2874f0;\n          padding-top: 0;\n          padding-bottom: 0;\n          align-items: normal;\n}\n\n.navbar-brand {\n          color: white;\n          font-family: Arial, Helvetica, sans-serif;\n}\n\n/* .navbar .navbar-nav {\n          margin-left: 30px;\n} */\n\n/* .navbar .nav-item {\n          border-right: 1px solid #9bc0e1;\n          border-left: 1px solid #4c82d1;\n} */\n\n.navbar .nav-item:first-child {\n          border-left: 0;\n}\n\n.navbar .nav-item:last-child {\n          border-right: 0;\n}\n\n.navbar-nav .nav-link {\n          color: rgb(255, 255, 255);\n          border-bottom: 3px solid transparent;\n}\n\n.navbar-nav .nav-link:hover {\n          border-bottom: 3px solid #FFDE00;\n}\n\n.navbar-brand small {\n    display:block;\n    font-size:12px;\n  }\n\n.nav-item>.nav-link.active {\n          border-bottom: 3px solid #FFDE00;\n}\n\n/*\n.fa-shopping-cart {\n          font-size: 32px;\n} */\n\n.headerBtn {\n          margin-left: 3px;\n          margin-top: 3px;\n}\n\n.header-shopping-cart {\n          position: relative;\n          top: 14px;\n          left: 50px;\n}\n\n.logo-image {\n          width: 40px;\n          height: 40px;\n          border-radius: 25px;\n}\n\n.logo-container {\n          display: inline-block;\n          vertical-align: middle;\n}\n\n.logo-container .logo {\n          padding-top: 7px;\n          padding-bottom: 7px;\n}\n\n.total {\n          display: inline-block;\n          font-size: 1.2rem;\n          font-weight: bold;\n          bottom: 6px;\n          position: relative;\n          color: rgb(255, 255, 255);\n          left: 8px;\n}\n\n.navbar .nav-item {\n          border-right: none !important;\n}\n\n.fa-shopping-cart {\n          /* color: rgb(255, 255, 255); */\n          font-size: 1.7rem;\n}\n\n.fa-shopping-cart.sml,\n#sml-cart {\n          font-size: 0.9rem;\n}\n\n.dropdown-toggle {\n          margin-top: 4px;\n          cursor: pointer;\n}\n\n.dropdown-toggle .icon-bar {\n          display: block;\n          width: 22px;\n          height: 3px;\n          background-color: #ffffff;\n          border-radius: 1px;\n          margin-bottom: 4px;\n}\n\n.dropdown-toggle:after {\n          display: none;\n}\n\n.dropdown-toggle:hover .icon-bar {\n          background-color: #f1f1f1;\n}\n\n/*\n#navbarSupportedContent .fa {\n          margin-top: 7px;\n}\n\n#navbarSupportedContent>a {\n          margin-right: 10px;\n}\n\n#navbarSupportedContent .btn-icon,\n#navbarSupportedContent .btn-text {\n          display: inline-block;\n}\n\n#navbarSupportedContent .btn {\n          position: relative;\n          border: 0;\n          padding-left: 36px;\n          color: #fff;\n}\n\n#navbarSupportedContent .btn-icon {\n          position: absolute;\n          left: 0;\n          top: 0;\n          bottom: 0;\n          background-color: #145793;\n          padding-left: 10px;\n          padding-right: 10px;\n          border-radius: .2rem 0 0 .2rem;\n          color: #fff;\n}\n\n#navbarSupportedContent .btn-success .btn-icon {\n          background-color: #3b893c;\n} */\n\n.dropdown-menu-right {\n          padding: 0;\n}\n\n.dropdown-menu-right .dropdown-item {\n          background-color: #fbfbfb;\n          border-bottom: 1px solid #f1f1f1;\n          transition: all 0.3s ease-out;\n}\n\n.dropdown-menu-right .dropdown-item:hover {\n          background-color: #f1f1f1;\n}\n\n.nav-link.dropdown-toggle {\n          margin-right: 0 !important;\n          padding-right: 0;\n          padding-left: 10px;\n          padding-top: 2px;\n}\n\n.btn-primary {\n          background-color: #fbfbfb;\n}\n\n.btn-primary:hover {\n          background-color: #fbfbfb;\n}\n\n.btn-group-sm>.btn,\n.btn-sm,\n.dropdown-item {\n          font-size: 0.80rem;\n}\n\n#loginBtn {\n          cursor: pointer;\n}\n\n.nav-mobile-buttons-wrapper,\n.products-links-mobile {\n          display: none;\n}\n\n.logo-container .logo-img,\n.logo-container .logo-text {\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.logo-container .logo-headline,\n.logo-container .logo-subheadline {\n    display: block;\n    text-align: center;\n}\n\n.logo-container .logo-headline {\n    font-size: 1.20rem;\n}\n\n.logo-container .logo-subheadline {\n    font-size: 0.70rem;\n    text-align: center;\n    letter-spacing: 0.05rem;\n}\n\n.logo-container .logo-text {\n    padding-left: 5px;\n    line-height: 1rem;\n}\n\n.cart-total {\n    display: inline-block;\n    padding-left: 5px;\n}\n\n@media only screen and (max-width: 1275px) and (min-width: 1024px) {\n    .navbar-nav .nav-link {\n            padding-top: 0.9rem;\n            padding-bottom: 0.5rem;\n    }\n    .header-shopping-cart {\n            top: 12px;\n    }\n    body {\n            padding-bottom: 30px;\n    }\n}\n\n@media screen and (max-width: 1024px) {\n          .navbar {\n                    height: 48px;\n          }\n          .navbar-nav .nav-link {\n                    padding-top: 0.70rem;\n                    padding-bottom: 0.50rem;\n          }\n          .header-shopping-cart {\n                    top: 9px;\n          }\n          #navbarSupportedContent .btn {\n                    margin-top: 0;\n          }\n}\n\n@media screen and (max-width: 960px) {\n          .nav-mobile-buttons-wrapper {\n                    display: block;\n          }\n          .nav-buttons-wrapper {\n                    display: none;\n          }\n          .nav-mobile-buttons-wrapper {\n                    padding: 5px 5px 0;\n                    text-align: center;\n          }\n          .nav-mobile-buttons-wrapper .btn {\n                    float: none;\n                    display: block;\n                    margin-bottom: 5px;\n                    margin-left: 0;\n                    text-align: left;\n                    border: 1px solid transparent;\n                    padding: .25rem 1.5rem;\n                    color: #212529;\n          }\n          .nav-mobile-buttons-wrapper .btn-icon {\n                    display: inline-block;\n                    min-width: 19px;\n          }\n          .dropdown-bottom-links {\n                    padding: 0px 5px 0;\n                    margin-bottom: 5px;\n          }\n          .dropdown-bottom-links .dropdown-item {\n                    border-bottom: 1px solid transparent;\n                    border-radius: 3px;\n                    margin-bottom: 5px;\n          }\n          .nav-mobile-buttons-wrapper .btn:hover{\n              background-color: #f1f1f1;\n          }\n}\n\n@media screen and (max-width: 768px) {\n          .body-content-wrapper {\n                    padding-top: 50px;\n          }\n}\n\n@media screen and (max-width: 767px) {\n          .navbar {\n                    height: 48px;\n          }\n          .navbar .navbar-nav {\n                    flex-direction: initial;\n                    margin-left: 15px;\n                    display: none;\n          }\n          .products-links-mobile .navbar-nav {\n                    flex-direction: initial;\n                    margin-left: 15px;\n                    display: block;\n          }\n          .products-links-mobile .nav-item .nav-link {\n                    font-size: 0.90rem;\n                    padding-left: 5px;\n                    padding-right: 5px;\n            }\n          .navbar-collapse.justify-content-end {\n                    flex-basis: 0;\n          }\n          .collapse:not(.show) {\n                    display: block;\n          }\n          .nav-link.dropdown-toggle {\n                    position: absolute;\n                    z-index: 1;\n                    top: 3px;\n                    right: 12px;\n          }\n          #products-dropdown {\n                    top: 0;\n          }\n          .body-content-wrapper {\n                    padding-top: 8vw;\n          }\n          .products-links-mobile {\n                    display: block;\n                    position: absolute;\n                    left: 188px;\n          }\n          .products-links-mobile .fa {\n                    font-size: 1.5rem;\n                    color: #fff;\n          }\n          .navbar-nav.products {\n                    display: none;\n          }\n          .products-links-mobile .nav-link.dropdown-toggle {\n                    position: relative;\n                    padding-top: 0.25rem;\n          }\n          .products-links-mobile .dropdown-menu.show {\n                    margin-top: .450rem;\n                    padding: 0;\n          }\n          .products-links-mobile .navbar-nav {\n                    flex-direction: column;\n                    margin: 0;\n          }\n          .products-links-mobile .navbar-nav .nav-item {\n                    float: none;\n                    width: 100%;\n                    border: 0;\n          }\n          .products-links-mobile .navbar-nav .nav-link {\n                    color: #212529;\n                    background-color: #fbfbfb;\n                    border-bottom: 1px solid #f1f1f1;\n                    transition: all 0.3s ease-out;\n                    padding-top: 0.30rem;\n                    padding-bottom: 0.30rem;\n                    text-transform: none;\n          }\n          .products-links-mobile .navbar-nav .nav-link:hover {\n                    background-color: #f1f1f1;\n          }\n          .header-shopping-cart {\n                    left: 45px;\n                    top: 9px;\n          }\n          .products-links-mobile .navbar-nav .nav-item:first-child>.nav-link {\n                    border-top-left-radius: 5px;\n                    border-top-right-radius: 5px;\n          }\n          .products-links-mobile .navbar-nav .nav-item:last-child>.nav-link {\n                    border-bottom-left-radius: 5px;\n                    border-bottom-right-radius: 5px;\n          }\n}\n\n@media screen and (max-width: 568px) {\n          .navbar-nav .nav-link {\n                    font-size: 0.90rem;\n                    padding-top: 0.80rem;\n          }\n}\n\n.btn-outline-warning,\n.btn-outline-warning:active,\n.btn-outline-warning:visited {\n          /* background-color: white !important; */\n          border-color: white !important;\n          color: white !important;\n}\n\n.btn-outline-warning:hover {\n          color: #ffffff !important;\n          background-color: transparent !important;\n}\n\n.btn {\n          margin-left: 10px;\n}\n\n#go-back {\n         -webkit-text-decoration: #ffffff;\n                 text-decoration: #ffffff;\n}\n"

/***/ }),

/***/ "./src/app/common/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-toggleable-md  fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a href=\"#\" class=\"navbar-brand logo-container\">\n        <span class=\"logo-img\">\n          <img src=\"./../../../assets/logo.png\" class=\"logo-image\" alt=\"logo\">\n        </span>\n        <span class=\"logo-text\">\n          <span class=\"logo-headline\">Perfumes2Go</span>\n          <span class=\"logo-subheadline\">(Wholesale)</span>\n        </span>\n      </a>\n    </div>\n    <div class=\"products-links-mobile\">\n      <a class=\"nav-link dropdown-toggle\" id=\"products-dropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <i class=\"fa fa-product-hunt\" aria-hidden=\"true\"></i>\n      </a>\n      <div class=\"dropdown-menu\" aria-labelledby=\"products-dropdown\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/products']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:\n                      true}\">All Products</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/products/new']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:\n                      true}\">New Arrivals</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/products/special']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:\n                      true}\">Specials</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/products']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:\n        true}\">All Products</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/products/new']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:\n        true}\">New Arrivals</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/products/special']\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:\n        true}\">Specials</a>\n      </li>\n    </ul>\n\n    <div class=\"mx-auto order-0 position-relative\">\n      <span class=\"pull-right header-shopping-cart\">\n        <p *ngIf=\"showCart\" class=\"total\" id=\"shopping-cart-total\">\n          <i class=\"fa fa-shopping-cart fa-3x\"></i><span class=\"cart-total\">{{(productsQuantity && productsQuantity !== 0) ? orderItems.length + \"(\"+productsQuantity+\")\" : orderItems.length\n          }}</span>\n        </p>\n      </span>\n    </div>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse justify-content-end pull-right\" id=\"navbarSupportedContent\">\n      <!-- navbar buttons -->\n      <div class=\"nav-buttons-wrapper\">\n        <a *ngIf=\"showLogin\" [routerLink]=\"['/user/login']\" class=\"btn btn-sm btn-outline-light\">\n          <i class=\"fa fa-sign-in\"></i>&nbsp;Login\n        </a>\n        <a [routerLink]=\"['/user/register']\" *ngIf=\"showSignup\" class=\"btn btn-sm btn-outline-light\">\n          <i class=\"fa fa-user\"></i>&nbsp;Sign Up\n        </a>\n        <a *ngIf=\"showMyAccount\" [routerLink]=\"['/user/details']\" class=\"btn btn-sm btn-outline-light\">\n          <i class=\"fa fa-user\"></i>&nbsp;Hi, {{userName}}\n        </a>\n        <button (click)=\"showCartDetails()\" *ngIf=\"showAddCart\" class=\"btn btn-sm btn-outline-light\">\n          <i id=\"sml-cart\" class=\"fa fa-shopping-cart\"></i>&nbsp;Checkout\n        </button>\n        <a [routerLink]=\"['/products']\" *ngIf=\"showEditCart\" class=\"btn btn-sm btn-outline-light\">\n          <i id=\"sml-cart\" class=\"fa fa-shopping-cart\"></i>&nbsp;Edit Cart\n        </a>\n        <button *ngIf=\"showBack\" id=\"go-back\" class=\"btn btn-sm btn-outline-light\" (click)=\"location.back()\">\n          <i class=\"fa fa-arrow-left\"></i>&nbsp;Go Back\n        </button>\n      </div>\n      <!-- navbar buttons end -->\n      <!-- dropdown -->\n      <div class=\"dropdown-wrapper\" *ngIf=\"showMenu\">\n        <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </a>\n        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\n          <!-- navbar buttons form mobile -->\n          <div class=\"nav-mobile-buttons-wrapper clearfix\">\n            <a *ngIf=\"showMyAccount\" [routerLink]=\"['/user/details']\" class=\"btn btn-sm btn-primary pull-left headerBtn\">\n              <span class=\"btn-icon\">\n                <i class=\"fa fa-user\"></i>\n              </span>\n              <span class=\"btn-text\">Hi, {{userName}}</span>\n            </a>\n            <a (click)=\"showCartDetails()\" *ngIf=\"showAddCart\" class=\"btn btn-sm btn-primary pull-right headerBtn\">\n              <span class=\"btn-icon\">\n                <i class=\"fa fa-shopping-cart fa-3x sml\"></i>\n              </span>\n              <span class=\"btn-text\">Checkout</span>\n            </a>\n            <a [routerLink]=\"['/products']\" *ngIf=\"showEditCart\" class=\"btn btn-sm btn-primary pull-right headerBtn\">\n              <span class=\"btn-icon\">\n                <i class=\"fa fa-shopping-cart fa-3x sml\"></i>\n              </span>\n              <span class=\"btn-text\">Edit Cart</span>\n            </a>\n            <a *ngIf=\"showBack\" class=\"btn btn-sm btn-primary pull-right headerBtn\" (click)=\"location.back()\">\n              <span class=\"btn-icon\">\n                <i class=\"fa fa-arrow-left\"></i>\n              </span>\n              <span class=\"btn-text\">Go Back</span>\n            </a>\n            <a [routerLink]=\"['/user/register']\" *ngIf=\"showSignup\" class=\"btn btn-sm btn-primary pull-right headerBtn\">\n              <span class=\"btn-icon\">\n                <i class=\"fa fa-user\"></i>\n              </span>\n              <span class=\"btn-text\">Sign Up</span>\n            </a>\n            <a *ngIf=\"showLogin\" [routerLink]=\"['/user/login']\" class=\"btn btn-sm btn-primary pull-left headerBtn\">\n              <span class=\"btn-icon\">\n                <i class=\"fa fa-sign-in\"></i>\n              </span>\n              <span class=\"btn-text\">Login</span>\n            </a>\n\n          </div>\n          <!-- navbar buttons form mobile end -->\n          <div class=\"dropdown-bottom-links clearfix\">\n            <a class=\"dropdown-item\" [routerLink]=\"['add-product']\" *ngIf=\"showAddItem\">\n              <span class=\"btn-text\">\n                <i class=\"fa fa-plus\"></i> Add Item\n              </span>\n            </a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/upload-products']\" *ngIf=\"showUploadProducts\">\n              <span class=\"btn-text\">\n                <i class=\"fa fa-file-excel-o\"></i> Upload Products\n              </span>\n            </a>\n            <!-- <a class=\"dropdown-item\" [routerLink]=\"['user/download']\">\n        <span class=\"btn-text\">\n          <i class=\"fa fa-file-excel-o\"></i> XLS List\n        </span>\n      </a> -->\n            <a class=\"dropdown-item\" [routerLink]=\"['orders']\" *ngIf=\"showOrders\">\n              <span class=\"btn-text\">\n                <i class=\"fa fa-arrow-right\"></i> Orders\n              </span>\n            </a>\n            <a *ngIf=\"isUserLoggedIn\" id=\"loginBtn\" class=\"dropdown-item\" (click)=\"logout()\">\n              <span class=\"btn-text\">\n                <i class=\"fa fa-sign-out\"></i> Logout\n              </span>\n            </a>\n          </div>\n        </div>\n      </div>\n      <!-- dropdown end -->\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/common/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../alert/alert.service */ "./src/app/common/alert/alert.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(cartService, session, alert, router, authService, location) {
        var _this = this;
        this.cartService = cartService;
        this.session = session;
        this.alert = alert;
        this.router = router;
        this.authService = authService;
        this.location = location;
        this.orderItems = [];
        this.showLogin = true;
        this.showSignup = true;
        this.showMyAccount = false;
        this.showAddCart = true;
        this.showCart = true;
        this.showEditCart = false;
        this.showBack = false;
        this.showAddItem = false;
        this.showOrders = false;
        this.showUploadProducts = false;
        this.showMenu = true;
        this.isUserLoggedIn = false;
        this.authService.isLoggedIn.subscribe(function (value) {
            if (session.retrieveToken() != null || value) {
                _this.showLogin = false;
                _this.showMyAccount = true;
                _this.isUserLoggedIn = true;
            }
            else {
                _this.showLogin = true;
                _this.showMyAccount = false;
                _this.isUserLoggedIn = false;
            }
            if (session.retrieveUserData() != null || value) {
                _this.userName = JSON.parse(session.retrieveUserData()).firstName;
            }
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartSubscription = this.cartService.cartObservable.subscribe(function (action) {
            var orderItems = _this.cartService.getCartItems();
            _this.productsQuantity = 0;
            for (var index = 0; index < orderItems.length; index++) {
                _this.productsQuantity += Number.parseInt(orderItems[index].quantity);
            }
        });
        this.orderItems = this.cartService.getCartItems();
        this.router.events.subscribe(function () {
            if (_this.location.path() !== '') {
                _this.showHideNavButtons(_this.location.path());
            }
        });
    };
    NavbarComponent.prototype.showHideNavButtons = function (path) {
        if (path === '/products' || path === '/products/new' || path === '/products/special') {
            this.showBack = false;
            this.showAddCart = true;
        }
        else {
            this.showBack = true;
            this.showAddCart = false;
        }
        if (path === '/order') {
            this.showEditCart = true;
        }
        else {
            this.showEditCart = false;
        }
        if (this.isUserLoggedIn) {
            // this.showMenu = true;
            this.showLogin = false;
            this.showSignup = false;
            this.showMyAccount = true;
            if (path === '/user/details') {
                this.showMyAccount = false;
            }
        }
        else {
            // this.showMenu = false;
            this.showLogin = true;
            this.showSignup = true;
            this.showMyAccount = false;
            if (path === '/user/login') {
                this.showMyAccount = false;
                this.showLogin = false;
                this.showAddCart = false;
            }
        }
        if (this.session.retrieveUserData()) {
            var userCategory = JSON.parse(this.session.retrieveUserData()).category;
            if (userCategory !== 'Customer') {
                this.showCart = false;
                this.showAddCart = false;
                this.showEditCart = false;
                this.showAddItem = true;
                this.showOrders = true;
                this.showUploadProducts = true;
            }
            else {
                this.showCart = true;
                this.showAddItem = false;
                this.showOrders = false;
                this.showUploadProducts = false;
            }
        }
        else {
            this.showAddItem = false;
            this.showOrders = false;
            this.showUploadProducts = false;
        }
    };
    NavbarComponent.prototype.showCartDetails = function () {
        this.session.saveCartData(JSON.stringify(this.cartService.getCartItems()));
        this.router.navigate(['/order']);
    };
    NavbarComponent.prototype.logout = function () {
        if (this.session.retrieveToken() != null) {
            this.session.destroy();
            this.cartService.clearCart();
            this.authService.isLoggedIn.next(false);
            this.alert.success('Successfully signed out');
            this.router.navigate(['/user/login']);
        }
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.cartSubscription.unsubscribe();
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/common/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/common/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"],
            _services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"],
            _alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/core/cart/cart-details/cart-details.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/core/cart/cart-details/cart-details.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".zoom {\n    transition: -webkit-transform .2s;\n    transition: transform .2s;\n    transition: transform .2s, -webkit-transform .2s;\n    /* Animation */\n    margin: 0 auto;\n}\n\n.zoom:hover {\n    position: absolute;\n    -webkit-transform: scale(5);\n            transform: scale(5);\n    /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */\n    /* margin-left: 3vw; */\n    z-index: 1;\n}\n\n.shopping-cart-total {\n    font-size: 24px;\n    font-weight: bold;\n}\n\n.shopping-cart-quantity {\n    font-size: 18px;\n    font-weight: bold;\n    color: #6c6c6c;\n}\n\n.summary-block {\n    padding: 30px;\n    background-color: #fff;\n    border-top: solid 3px #337AB7;\n}\n\n.shopping-cart {\n    margin-top: 50px;\n}\n\n.summary-table {\n    margin-top: 20px;\n    padding: 15px;\n}\n\nbutton{\n    margin-left: 3px;\n}\n\nh2 {\n    font-size: 30px;\n}\n"

/***/ }),

/***/ "./src/app/core/cart/cart-details/cart-details.component.html":
/*!********************************************************************!*\
  !*** ./src/app/core/cart/cart-details/cart-details.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-list-products></app-list-products> -->\n<section *ngIf=\"orderItems.length !== 0\">\n  <div class=\"table-responsive\">\n    <table class=\"table table-bordered table-striped\">\n      <thead>\n        <tr>\n          <th>Image</th>\n          <th>Brand</th>\n          <th>Type</th>\n          <th>ProductCode</th>\n          <th>Description</th>\n          <th>Price</th>\n          <th>Quantity</th>\n          <th>Subtotal</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of orderItems\">\n          <td>\n            <img *ngIf=\"!item.product.image\" src=\"../../../../assets/product_placeholder.png\" alt='image' height=\"42\" width=\"42\" />\n            <img *ngIf=\"item.product.image\" class=\"zoom\" [src]=\"item.product.image\" alt=\"image\" height=\"42\" width=\"42\">\n          </td>\n          <td>{{item.product.brand}}</td>\n          <td>{{item.product.type}}</td>\n          <td>{{item.product.productCode}}</td>\n          <td>{{item.product.description}}</td>\n          <td>{{item.product.price | currency:'USD'}}</td>\n          <td>{{item.quantity}}</td>\n          <td>{{item.subtotal | currency:'USD'}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <div class=\"summary-block shopping-cart text-center center-block\">\n    <span class=\"shopping-cart-quantity\">\n      Products: {{ orderItems.length }}\n      <i class=\"fa fa-cubes\"></i>\n      Quantity: {{ quantity }} </span>\n    <br>\n    <br>\n    <span class=\"shopping-cart-total\">TOTAL: {{ total | currency:'USD'}}</span>\n    <br>\n  </div>\n</section>\n\n<!--This section would be shown if cart is empty-->\n<section class=\"summary-table clear\" *ngIf=\"orderItems.length === 0\">\n  <div class=\"shopping-cart text-center center-block\">\n    <h2>Your cart is empty.</h2>\n    <h5>Try adding products by setting the desired quantity and clicking on the add button.</h5>\n    <div class=\"form-group text-center\" style=\"margin-top:60px;\">\n      <a [routerLink]=\"['/products']\">\n        <button class=\"btn btn-success btn-sm place-order\">\n          <i class=\"fa fa-reply\"></i> View Products\n        </button>\n      </a>\n\n      <a *ngIf=\"!isUserLoggedIn\" [routerLink]=\"['/user/login']\">\n        <button class=\"btn btn-success btn-sm place-order\">\n          <i class=\"fa fa-sign-in\"></i> Login\n        </button>\n      </a>\n\n      <a *ngIf=\"!isUserLoggedIn\" [routerLink]=\"['/user/register']\">\n        <button class=\"btn btn-success btn-sm place-order\">\n          <i class=\"fa fa-user-plus\"></i> Register\n        </button>\n      </a>\n    </div>\n  </div>\n</section>\n\n<!--Below div will be shown when cart is not empty-->\n<div *ngIf=\"orderItems.length !== 0\">\n\n  <!-- This section would be shown if user is not logged-in -->\n  <section *ngIf=\"!isUserLoggedIn\" class=\"summary-table clear\">\n    <div class=\"text-center center-block\">\n      <h2>Login or Create an Account to Continue</h2>\n      <div class=\"form-group text-center\">\n        <a [routerLink]=\"['/user/login']\">\n          <button class=\"btn btn-primary btn-sm\">\n            <i class=\"fa fa-sign-in\"></i> Login</button>\n        </a>\n\n        <a [routerLink]=\"['/user/register']\">\n          <button class=\"btn btn-success btn-sm\">\n            <i class=\"fa fa-user-plus\"></i> Register</button>\n        </a>\n      </div>\n    </div>\n  </section>\n\n  <!-- This would be shown in user is logged-in -->\n  <app-contact-info *ngIf=\"isUserLoggedIn\"></app-contact-info>\n</div>"

/***/ }),

/***/ "./src/app/core/cart/cart-details/cart-details.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/cart/cart-details/cart-details.component.ts ***!
  \******************************************************************/
/*! exports provided: CartDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartDetailsComponent", function() { return CartDetailsComponent; });
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartDetailsComponent = /** @class */ (function () {
    function CartDetailsComponent(cartService, session, authService) {
        var _this = this;
        this.cartService = cartService;
        this.session = session;
        this.authService = authService;
        this.orderItems = [];
        this.isUserLoggedIn = false;
        this.authService.isLoggedIn.subscribe(function (value) {
            if (session.retrieveToken() != null || value) {
                _this.isUserLoggedIn = true;
            }
            else {
                _this.isUserLoggedIn = false;
            }
        });
    }
    CartDetailsComponent.prototype.ngOnInit = function () {
        this.orderItems = this.cartService.getCartItems();
        // This will help to retain cart data even after page refresh
        if (this.orderItems.length > 0) {
            this.session.saveCartData(JSON.stringify(this.orderItems));
        }
        else if (this.session.retrieveCartData()) {
            this.orderItems = JSON.parse(this.session.retrieveCartData());
            this.cartService.setCartItems(this.orderItems);
        }
        this.getTotalAndQuantity();
    };
    CartDetailsComponent.prototype.getTotalAndQuantity = function () {
        this.total = 0;
        this.quantity = 0;
        for (var i = 0; i < this.orderItems.length; i++) {
            this.quantity += Number.parseInt(this.orderItems[i].quantity.toString());
            this.total += this.orderItems[i].subtotal;
        }
    };
    CartDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart-details',
            template: __webpack_require__(/*! ./cart-details.component.html */ "./src/app/core/cart/cart-details/cart-details.component.html"),
            styles: [__webpack_require__(/*! ./cart-details.component.css */ "./src/app/core/cart/cart-details/cart-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_0__["CartService"],
            _services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], CartDetailsComponent);
    return CartDetailsComponent;
}());



/***/ }),

/***/ "./src/app/core/cart/order-status/order-status.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/core/cart/order-status/order-status.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/cart/order-status/order-status.component.html":
/*!********************************************************************!*\
  !*** ./src/app/core/cart/order-status/order-status.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  order-status works!\n</p>\n"

/***/ }),

/***/ "./src/app/core/cart/order-status/order-status.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/cart/order-status/order-status.component.ts ***!
  \******************************************************************/
/*! exports provided: OrderStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderStatusComponent", function() { return OrderStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderStatusComponent = /** @class */ (function () {
    function OrderStatusComponent() {
    }
    OrderStatusComponent.prototype.ngOnInit = function () {
    };
    OrderStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-status',
            template: __webpack_require__(/*! ./order-status.component.html */ "./src/app/core/cart/order-status/order-status.component.html"),
            styles: [__webpack_require__(/*! ./order-status.component.css */ "./src/app/core/cart/order-status/order-status.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderStatusComponent);
    return OrderStatusComponent;
}());



/***/ }),

/***/ "./src/app/core/orders/order-details/order-details.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/core/orders/order-details/order-details.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    border-top-width: 3px;\n    margin-bottom: 25px;\n    color: #6e6e6e;\n  }\n  .card-title {    \n    font-size: 0.95rem;\n  }\n  .card-text {\n    font-size: 0.92rem;\n  }\n  legend{\n    border-bottom: 1px solid rgba(0,0,0,.12);\n    font-size: 1.1rem;\n    padding-bottom: 10px;\n  }\n  .grand-total-row-bg {\n  background-color: rgba(0,0,0,.02) !important;\n}\n  .order-status-row {\n  background: #f9f9f9;\n  font-size: 0.85rem;\n  color: #3c3c3c;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  border: 1px solid #f1f1f1;\n  border-radius: 3px;\n}"

/***/ }),

/***/ "./src/app/core/orders/order-details/order-details.component.html":
/*!************************************************************************!*\
  !*** ./src/app/core/orders/order-details/order-details.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" loadingText=\"Loading...\" type=\"ball-scale-multiple\">\n</ngx-spinner>\n<div class=\"container-fluid\">\n    <div class=\"card\" *ngIf=\"orderInfo\">\n        <div class=\"card-body\">\n            <div class=\"card-title\">\n                <div class=\"col-md-6 mx-auto order-status-row\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3 text-right font-weight-bold\">Order No.:</div>\n                        <div class=\"col-md-3\">{{orderInfo.orderNo}}</div>\n                        <div class=\"col-md-3 text-right font-weight-bold\">Order Status:</div>\n                        <div class=\"col-md-3\">{{orderInfo.orderStatus}}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"card-text\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <fieldset *ngIf=\"orderInfo.customerId\">\n                            <legend>Customer Details</legend>\n                            <div class=\"form-group row\">\n                                <div class=\"col-md-4 text-right\">First Name:</div>\n                                <div class=\"col-md-8\">\n                                    <span class=\"font-weight-bold\">{{ orderInfo.customerId.firstName }}</span>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <div class=\"col-md-4 text-right\">\n                                    Last Name:\n                                </div>\n                                <div class=\"col-md-8\">\n                                    <span class=\"font-weight-bold\">{{ orderInfo.customerId.lastName }}</span>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <div class=\"col-md-4 text-right\">\n                                    Phone Number:\n                                </div>\n                                <div class=\"col-md-8\">\n                                    <span class=\"font-weight-bold\">{{ orderInfo.customerId.phoneNumber }}</span>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <div class=\"col-md-4 text-right\">\n                                    Mobile Number:\n                                </div>\n                                <div class=\"col-md-8\">\n                                    <span class=\"font-weight-bold\">{{ orderInfo.customerId.mobileNumber }}</span>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <div class=\"col-md-4 text-right\">\n                                    Email:\n                                </div>\n                                <div class=\"col-md-8\">\n                                    <span class=\"font-weight-bold\">{{ orderInfo.customerId.email }}</span>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <div class=\"col-md-4 text-right\">\n                                    Company Name:\n                                </div>\n                                <div class=\"col-md-8\">\n                                    <span class=\"font-weight-bold\">{{ orderInfo.customerId.companyName }}</span>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <div class=\"col-md-4 text-right\">\n                                    Remarks:\n                                </div>\n                                <div class=\"col-md-8\">\n                                    <span class=\"font-weight-bold\">{{ orderInfo.userRemarks }}</span>\n                                </div>\n                            </div>\n                        </fieldset>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <fieldset *ngIf=\"orderInfo.addressId\">\n                            <legend>Delivery Address</legend>\n                            <div class=\"form-group row\">\n                                <div class=\"col-md-4 text-right\">\n                                    Attention to:\n                                </div>\n                                <div class=\"col-md-8\">\n                                    <span class=\"font-weight-bold\">{{ orderInfo.addressId.attentionTo }}</span>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <div class=\"col-md-4 text-right\">\n                                    Address Line1:\n                                </div>\n                                <div class=\"col-md-8\">\n                                    <span class=\"font-weight-bold\">{{ orderInfo.addressId.addressLine1 }}</span>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <div class=\"col-md-4 text-right\">\n                                    Address Line2:\n                                </div>\n                                <div class=\"col-md-8\">\n                                    <span class=\"font-weight-bold\">{{ orderInfo.addressId.addressLine2 }}</span>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <div class=\"col-md-4 text-right\">\n                                    City:\n                                </div>\n                                <div class=\"col-md-8\">\n                                    <span class=\"font-weight-bold\">{{ orderInfo.addressId.city + \"-\" + orderInfo.addressId.zipcode }}</span>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <div class=\"col-md-4 text-right\">\n                                    Country:\n                                </div>\n                                <div class=\"col-md-8\">\n                                    <span class=\"font-weight-bold\">{{ orderInfo.addressId.country }}</span>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <div class=\"col-md-4 text-right\">\n                                    Email:\n                                </div>\n                                <div class=\"col-md-8\">\n                                    <span class=\"font-weight-bold\">{{ orderInfo.addressId.email }}</span>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <div class=\"col-md-4 text-right\">\n                                    Phone:\n                                </div>\n                                <div class=\"col-md-8\">\n                                    <span class=\"font-weight-bold\">{{ orderInfo.addressId.phone }}</span>\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <div class=\"col-md-4 text-right\">\n                                    State:\n                                </div>\n                                <div class=\"col-md-8\">\n                                    <span class=\"font-weight-bold\">{{ orderInfo.addressId.state }}</span>\n                                </div>\n                            </div>\n                        </fieldset>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-striped\">\n            <thead>\n                <tr>\n                    <th>Image</th>\n                    <th>Brand</th>\n                    <th>Type</th>\n                    <th>ProductCode</th>\n                    <th>Description</th>\n                    <th>Price</th>\n                    <th>Quantity</th>\n                    <th>Subtotal</th>\n                </tr>\n            </thead>\n            <tbody *ngIf=\"orderInfo\">\n                <tr *ngFor=\"let item of orderInfo.orderItems\">\n                    <td>\n                        <img *ngIf=\"!item.productId.image\" src=\"../../../../assets/product_placeholder.png\" alt='image' height=\"42\" width=\"42\" />\n                        <img *ngIf=\"item.productId.image\" class=\"zoom\" [src]=\"item.productId.image\" alt=\"image\" height=\"42\" width=\"42\">\n                    </td>\n                    <td>{{item.productId.brand}}</td>\n                    <td>{{item.productId.type}}</td>\n                    <td>{{item.productId.productCode}}</td>\n                    <td>{{item.productId.description}}</td>\n                    <td>{{item.productId.price | currency:'USD'}}</td>\n                    <td>{{item.quantity}}</td>\n                    <td>{{(item.productId.price * item.quantity) | currency:'USD'}}</td>\n                </tr>\n                <tr class=\"grand-total-row-bg\">\n                    <td colspan=\"7\" class=\"text-right font-weight-bold\">Grand Total</td>\n                    <td class=\"font-weight-bold\">{{orderInfo.orderAmount | currency:'USD'}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/core/orders/order-details/order-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core/orders/order-details/order-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: OrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function() { return OrderDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderDetailsComponent = /** @class */ (function () {
    function OrderDetailsComponent(router, route, cartService, spinner) {
        this.router = router;
        this.route = route;
        this.cartService = cartService;
        this.spinner = spinner;
        this.orderInfo = {};
        this.orderId = this.route.snapshot.paramMap.get('orderId');
    }
    OrderDetailsComponent.prototype.ngOnInit = function () {
        this.getOrderDetails();
    };
    OrderDetailsComponent.prototype.getOrderDetails = function () {
        var _this = this;
        this.spinner.show();
        this.cartService.getOrderDetails(this.orderId).subscribe(function (resp) {
            _this.spinner.hide();
            _this.orderInfo = resp;
        }, function (err) {
            _this.spinner.hide();
        });
    };
    OrderDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-details',
            template: __webpack_require__(/*! ./order-details.component.html */ "./src/app/core/orders/order-details/order-details.component.html"),
            styles: [__webpack_require__(/*! ./order-details.component.css */ "./src/app/core/orders/order-details/order-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], OrderDetailsComponent);
    return OrderDetailsComponent;
}());



/***/ }),

/***/ "./src/app/core/orders/order-placed/order-placed.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/core/orders/order-placed/order-placed.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    border-top-width: 3px;\n    margin-bottom: 25px;\n    color: #6e6e6e;\n  }\n  .card-title {\n    font-size: 0.95rem;\n    margin-bottom: 15px;\n    margin-top: 25px;\n  }\n  .card-text {\n    font-size: 0.92rem;\n    margin-bottom: 35px;\n  }\n  .card-text > h3 {\n    margin-bottom: 45px;\n  }\n  .check-icon {\n  display: inline-block;\n  width: 61px;\n  height: 61;\n  margin: 0 auto;\n  /* background: url('../../../../assets/check_icon.png') no-repeat 0 0; */\n}\n  .fa-thumbs-o-up {\n  font-size: 80px;\n  color: #4eae49;\n}\n"

/***/ }),

/***/ "./src/app/core/orders/order-placed/order-placed.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/core/orders/order-placed/order-placed.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-center\">\n    <div class=\"card-body\">\n        <i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i>\n        <div class=\"card-title\"><h1>Thanks You!</h1></div>\n        <div class=\"card-text\">\n            <h3>Your order is placed successfully</h3>\n            <button class=\"btn btn-primary\" (click)=\"startNewOrder()\">Place New Order</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/core/orders/order-placed/order-placed.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/orders/order-placed/order-placed.component.ts ***!
  \********************************************************************/
/*! exports provided: OrderPlacedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPlacedComponent", function() { return OrderPlacedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderPlacedComponent = /** @class */ (function () {
    function OrderPlacedComponent(router) {
        this.router = router;
    }
    OrderPlacedComponent.prototype.startNewOrder = function () {
        this.router.navigate(['/products']);
    };
    OrderPlacedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-placed',
            template: __webpack_require__(/*! ./order-placed.component.html */ "./src/app/core/orders/order-placed/order-placed.component.html"),
            styles: [__webpack_require__(/*! ./order-placed.component.css */ "./src/app/core/orders/order-placed/order-placed.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], OrderPlacedComponent);
    return OrderPlacedComponent;
}());



/***/ }),

/***/ "./src/app/core/orders/orders-list/orders-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/core/orders/orders-list/orders-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-dialog {\n  -webkit-transform: translate(0,-50%);\n  transform: translate(0,-50%);\n  top: 20%;\n  margin: 0 auto;\n}\n\n.modal-content {\n  overflow:hidden;\n}\n"

/***/ }),

/***/ "./src/app/core/orders/orders-list/orders-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/core/orders/orders-list/orders-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" loadingText=\"Loading...\" type=\"ball-scale-multiple\">\n</ngx-spinner>\n<div class=\"row\">\n  <div class=\"col-md-10 mx-auto\">\n    <div class=\"form-group row\">\n      <label class=\"col-sm-2 text-right col-form-label pt-sm-0\">Start Date: </label>\n      <div class=\"col-sm-2\"><input type=\"date\" class=\"form-control form-control-sm\" [(ngModel)]=\"fromDate\" (input)=\"getOrdersList()\"></div>\n      <label class=\"col-sm-2 text-right col-form-label pt-sm-0\">End Date: </label>\n      <div class=\"col-sm-2\"><input type=\"date\" class=\"form-control form-control-sm\" [(ngModel)]=\"toDate\" (input)=\"getOrdersList()\"></div>\n      <label class=\"col-sm-2 text-right col-form-label pt-sm-0\">Order Status: </label>\n      <div class=\"col-sm-2\">\n        <select class=\"form-control form-control-sm\" [(ngModel)]=\"orderStatus\" (change)=\"getOrdersList()\">\n          <option selected>ALL</option>\n          <option *ngFor=\"let orderStatus of orderStatuses\" [value]=\"orderStatus\">{{orderStatus}}</option>\n        </select>\n      </div>\n  </div>\n</div>\n</div>\n<section>\n    <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-striped\">\n            <thead>\n              <tr>\n                <th>Order No</th>\n                <th>Order Date</th>\n                <th>Order Amount</th>\n                <th>Customer Name</th>\n                <th>Order Status</th>\n                <th>Customer Remark</th>\n                <th>Action</th>\n                <th class=\"text-center\">View</th>\n             </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let order of orders\">\n                <td>{{order.orderNo}}</td>\n                <td>{{order.createdAt | date : 'dd MMM, yyyy'}}</td>\n                <td>{{order.orderAmount | currency:'USD'}}</td>\n                <td>{{order.customerId.firstName + ' ' +order.customerId.lastName }}</td>\n                <td>{{order.orderStatus}}</td>\n                <td>{{order.userRemarks}}</td>\n                <td>\n                  <select #status (change)=\"orderStatusChanged(order, status.value)\" [disabled]=\"order.orderStatus === 'Cancelled'\">\n                    <option *ngFor=\"let orderStatus of orderStatuses\" [value]=\"orderStatus\" [selected]=\"order.orderStatus === orderStatus\">{{orderStatus}}</option>\n                  </select>\n                </td>\n                <td class=\"text-center\">\n                    <a routerLink=\"order-details/{{order._id}}\" class=\"d-inline-block\">\n                        <span class=\"btn btn-success btn-sm place-order pull-right\">\n                          <i class=\"fa fa-eye\"></i> Details View\n                        </span>\n                    </a>\n                </td>\n              </tr>\n              <tr *ngIf=\"orders.length === 0\">\n                <td colspan=\"8\" >\n                  <div style=\"text-align: center;\">No orders found</div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n    </div>\n</section>\n<section>\n  <div id=\"orderConfirmationModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog modal-md\">\n      <div class=\"modal-content\">\n        <div class=\"modal-body\">Are you sure you want to cancel this order? This can not be undone.</div>\n        <div class=\"modal-footer\" align=\"right\">\n          <button type=\"button\" id=\"btnOK\" class=\"btn btn-primary btn-sm\" (click)=\"deleteOrder()\">\n            Yes, Cancel it</button>\n          <button type=\"button\" id=\"btnClose\" class=\"btn btn-danger btn-sm\" (click)=\" closeModal() \">\n            No, Keep it</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/core/orders/orders-list/orders-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/orders/orders-list/orders-list.component.ts ***!
  \******************************************************************/
/*! exports provided: OrdersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersListComponent", function() { return OrdersListComponent; });
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrdersListComponent = /** @class */ (function () {
    function OrdersListComponent(cartService, spinner) {
        this.cartService = cartService;
        this.spinner = spinner;
        this.orders = [];
        this.orderStatuses = ['Pending', 'In Progress', 'Dispatched', 'Delivered', 'Cancelled'];
        this.orderStatus = 'Pending';
    }
    OrdersListComponent.prototype.ngOnInit = function () {
        this.fromDate = new Date();
        this.toDate = new Date();
        this.fromDate = new Date(this.fromDate.setDate(this.fromDate.getDate() - 15)); // date before 15 days
        this.fromDate = this.fromDate.getFullYear() + '-' + this.getInTwoDigit(this.fromDate.getMonth() + 1) + '-' +
            this.getInTwoDigit(this.fromDate.getDate());
        this.toDate = this.toDate.getFullYear() + '-' + this.getInTwoDigit(this.toDate.getMonth() + 1) + '-' +
            this.getInTwoDigit(this.toDate.getDate());
        this.getOrdersList();
    };
    OrdersListComponent.prototype.getInTwoDigit = function (value) {
        if (value < 10) {
            return '0' + value;
        }
        return value;
    };
    OrdersListComponent.prototype.getOrdersList = function () {
        var _this = this;
        /** spinner starts */
        this.spinner.show();
        this.cartService.getOrders(this.fromDate, this.toDate, this.orderStatus)
            .subscribe(function (response) {
            /** spinner ends */
            _this.spinner.hide();
            _this.orders = response;
        }, function (error) {
            /** spinner ends */
            _this.spinner.hide();
        });
    };
    OrdersListComponent.prototype.orderStatusChanged = function (order, status) {
        var _this = this;
        this.selectedOrder = order;
        if (status.toLowerCase() === 'cancelled') {
            $('#orderConfirmationModal').modal('show');
            return;
        }
        /** spinner starts */
        this.spinner.show();
        if (status !== 'none') {
            order.orderStatus = status;
            var data = {
                'orderStatus': status,
                'orderItems': order.orderItems
            };
            this.cartService.updateOrder(data, order._id).subscribe(function () {
                /** spinner ends */
                _this.spinner.hide();
                order.orderStatus = status;
            }, function (err) {
                /** spinner ends */
                _this.spinner.hide();
                console.log('order update error', err);
            });
        }
    };
    OrdersListComponent.prototype.closeModal = function () {
        $('#orderConfirmationModal').modal('hide');
        this.getOrdersList();
    };
    OrdersListComponent.prototype.deleteOrder = function () {
        var _this = this;
        var status = 'Cancelled';
        var data = {
            'orderStatus': status,
            'orderItems': this.selectedOrder.orderItems
        };
        this.cartService.updateOrder(data, this.selectedOrder._id).subscribe(function () {
            _this.selectedOrder.orderStatus = status;
            $('#orderConfirmationModal').modal('hide');
        }, function (err) {
            console.log('order update error', err);
        });
    };
    OrdersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders-list',
            template: __webpack_require__(/*! ./orders-list.component.html */ "./src/app/core/orders/orders-list/orders-list.component.html"),
            styles: [__webpack_require__(/*! ./orders-list.component.css */ "./src/app/core/orders/orders-list/orders-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_0__["CartService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], OrdersListComponent);
    return OrdersListComponent;
}());



/***/ }),

/***/ "./src/app/core/products/add-product/add-product.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/core/products/add-product/add-product.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    background-color: #fcfbfb;\n    margin-top: 2vw;\n    margin-bottom: 2vw;\n}\n\n.radio-inline {\n    margin: 6px 4px;\n}\n"

/***/ }),

/***/ "./src/app/core/products/add-product/add-product.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/core/products/add-product/add-product.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" loadingText=\"Loading...\" type=\"ball-scale-multiple\">\n</ngx-spinner>\n<div class=\"col-md-8 col-sm-12 mx-auto\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Product\n    </div>\n    <div class=\"card-body\">\n      <form class=\"form-horizontal\" name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <label for=\"SKU\" class=\"col-md-3 col-sm-12 text-right col-form-label\">SKU:</label>\n            <div class=\"col-md-9 col-sm-12\">\n              <!-- <input type=\"text\" class=\"form-control\" id=\"SKU\" name=\"SKU\" [(ngModel)]=\"model.SKU\" #SKU=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && SKU.invalid }\"\n                required> -->\n              <ng-select [items]=\"productCodes\" [addTag]=\"true\" name=\"productCode\" bindLabel=\"productCode\" bindValue=\"id\" #productCode=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && productCode.invalid }\"\n                [(ngModel)]=\"model.SKU\" (ngModelChange)=\"onChange($event)\" [disabled]=\"!isSKUEditable\">\n              </ng-select>\n              <div [hidden]=\"productCode.valid || productCode.untouched\">\n                <small *ngIf=\"productCode.errors && productCode.errors.required\" class=\"form-text text-left error-msg\">Product Code is required</small>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <label for=\"brand\" class=\"col-md-3 col-sm-12 text-right col-form-label\">Brand:</label>\n            <div class=\"col-md-9 col-sm-12\">\n              <ng-select [items]=\"brands\" name=\"brand\" [addTag]=\"true\" bindLabel=\"brands\" bindValue=\"id\" #brand=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && brand.invalid }\"\n                [(ngModel)]=\"model.brand\">\n              </ng-select>\n              <div [hidden]=\"brand.valid || brand.untouched\">\n                <small *ngIf=\"brand.errors && brand.errors.required\" class=\"form-text text-left error-msg\">Brand is required</small>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <label for=\"description\" class=\"col-md-3 col-sm-12 text-right col-form-label\">Description:</label>\n            <div class=\"col-md-9 col-sm-12\">\n              <textarea type=\"text\" class=\"form-control\" id=\"description\" name=\"description\" [(ngModel)]=\"model.description\" #description=\"ngModel\"></textarea>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <label for=\"type\" class=\"col-md-3 col-sm-12 text-right col-form-label\">Type:</label>\n            <div class=\"col-md-9 col-sm-12\">\n              <ng-select [items]=\"types\" name=\"type\" [addTag]=\"true\" bindLabel=\"types\" bindValue=\"id\" #type=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && type.invalid }\"\n                [(ngModel)]=\"model.type\">\n              </ng-select>\n              <div [hidden]=\"type.valid || type.untouched\">\n                <small *ngIf=\"type.errors && type.errors.required\" class=\"form-text text-left error-msg\">Type is required</small>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <label for=\"stoke\" class=\"col-md-3 col-sm-12 text-right col-form-label\">Stock:</label>\n            <div class=\"col-md-9 col-sm-12\">\n              <input type=\"number\" class=\"form-control\" id=\"stock\" name=\"stock\" min=\"0\" (input)=\"restrictNegativeValue($event)\" [(ngModel)]=\"model.stock\"\n                #stock=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && stock.invalid }\" required>\n              <div [hidden]=\"stock.valid || stock.untouched\">\n                <small *ngIf=\"stock.errors && stock.errors.required\" class=\"form-text text-left error-msg\">Stock is required</small>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <label for=\"price\" class=\"col-md-3 col-sm-12 text-right col-form-label\">Price:</label>\n            <div class=\"col-md-9 col-sm-12\">\n              <input type=\"number\" class=\"form-control\" id=\"price\" name=\"price\" min=\"0\" (input)=\"restrictNegativeValue($event)\" [(ngModel)]=\"model.price\"\n                #price=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && price.invalid }\" required>\n              <div [hidden]=\"price.valid || price.untouched\">\n                <small *ngIf=\"price.errors && price.errors.required\" class=\"form-text text-left error-msg\">Price is required</small>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <label for=\"description\" class=\"col-md-3 col-sm-12 text-right col-form-label\">Category:</label>\n            <div class=\"col-md-9 col-sm-12\">\n              <label class=\"radio-inline\">\n                <input name=\"normal\" id=\"input-type-normal\" value=\"normal\" type=\"radio\" [(ngModel)]=\"model.category\" #category=\"ngModel\"\n                  checked/> Normal\n              </label>\n              <label class=\"radio-inline\">\n                <input name=\"special\" id=\"input-type-special\" value=\"special\" type=\"radio\" [(ngModel)]=\"model.category\" #category=\"ngModel\"\n                /> Special\n              </label>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <label for=\"status\" class=\"col-md-3 col-sm-12 text-right col-form-label\">Status:</label>\n            <div class=\"col-md-9 col-sm-12\">\n              <label class=\"radio-inline\">\n                <input name=\"active\" id=\"input-type-active\" value=\"active\" type=\"radio\" [(ngModel)]=\"model.productStatus\" #productStatus=\"ngModel\"\n                  checked/> Active\n              </label>\n              <label class=\"radio-inline\">\n                <input name=\"deactive\" id=\"input-type-deactive\" value=\"deactive\" type=\"radio\" [(ngModel)]=\"model.productStatus\" #productStatus=\"ngModel\"\n                /> Deactive\n              </label>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <label for=\"filePicker\" class=\"col-md-3 col-sm-12 text-right col-form-label\">Upload Image:</label>\n            <div class=\"col-md-9 col-sm-12\">\n              <input type=\"file\" id=\"filePicker\" (change)=\"onFileChange($event)\">\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group text-center\">\n          <button type=\"submit\" name=\"submitted\" value=\"true\" class=\"btn btn-success btn-sm place-order\" [disabled]='!f.form.valid'>\n            <i class=\"fa fa-send-o\"></i> {{buttonLabel}}\n          </button>\n          &nbsp;\n          <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"cancel()\">\n            <i class=\"fa fa-send-o\"></i> Cancel\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/core/products/add-product/add-product.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/products/add-product/add-product.component.ts ***!
  \********************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/alert/alert.service */ "./src/app/common/alert/alert.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/products.service */ "./src/app/services/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(productService, alertService, router, route, spinner, location) {
        this.productService = productService;
        this.alertService = alertService;
        this.router = router;
        this.route = route;
        this.spinner = spinner;
        this.location = location;
        this.model = {};
        this.buttonLabel = 'Add Product';
        this.brands = [];
        this.types = [];
        this.productCodes = [];
        this.isSKUEditable = true;
    }
    AddProductComponent.prototype.ngOnInit = function () {
        this.productCode = this.route.snapshot.paramMap.get('sku');
        if (this.productCode) {
            this.getProductDetails();
            this.buttonLabel = 'Update Product';
            this.isSKUEditable = false;
        }
        this.getBrands();
        this.getTypes();
        this.getProductCode();
        this.model = {
            category: 'normal',
            productStatus: 'active'
        };
    };
    AddProductComponent.prototype.getBrands = function () {
        var _this = this;
        this.productService.getBrands().then(function (data) {
            _this.brands = data;
        }, function (error) {
            console.log('service down ', error);
        });
    };
    AddProductComponent.prototype.getTypes = function () {
        var _this = this;
        this.productService.getTypes().then(function (data) {
            _this.types = data;
        }, function (error) {
            console.log('service down ', error);
        });
    };
    AddProductComponent.prototype.getProductCode = function () {
        var _this = this;
        this.productService.getProductCodes().then(function (data) {
            _this.productCodes = data;
        }, function (error) {
            console.log('service down ', error);
        });
    };
    AddProductComponent.prototype.onSubmit = function () {
        var _this = this;
        /** spinner starts */
        this.spinner.show();
        if (this.productCode) {
            this.model.stock = this.model.stock;
            this.productService.updateProduct(this.model, this.productCode).subscribe(function (data) {
                /** spinner ends */
                _this.spinner.hide();
                _this.alertService.success('Product updated successfully.', true);
                setTimeout(function () {
                    _this.location.back();
                }, 1000);
            }, function (error) {
                /** spinner ends */
                _this.spinner.hide();
                _this.alertService.error(error.statusText);
                if (error.status === 0) {
                    console.log('service down ', error);
                }
                else {
                    _this.alertService.error(error.statusText);
                }
            });
        }
        else {
            this.productService.addProduct(this.model).subscribe(function () {
                /** spinner ends */
                _this.spinner.hide();
                _this.alertService.success('Item added successfully.', true);
                _this.router.navigate(['/products']);
            }, function (error) {
                /** spinner ends */
                _this.spinner.hide();
                if (error.status === 0) {
                    console.log('service down ', error);
                }
                else {
                    _this.alertService.error(error.statusText);
                }
            });
        }
    };
    AddProductComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = function () {
                _this.model['imageBase64'] = reader.result.split(',')[1];
            };
        }
    };
    AddProductComponent.prototype.cancel = function () {
        this.location.back();
    };
    AddProductComponent.prototype.onChange = function (productCode) {
        var isProductCodeExist = this.productCodes.indexOf(productCode) > -1;
        if (isProductCodeExist) {
            this.productCode = productCode;
            this.getProductDetails();
        }
    };
    AddProductComponent.prototype.getProductDetails = function () {
        var _this = this;
        this.spinner.show();
        this.productService.getProductDetails(this.productCode).subscribe(function (resp) {
            _this.spinner.hide();
            _this.model = resp;
            _this.buttonLabel = 'Update Product';
        }, function (err) {
            _this.spinner.hide();
            console.log('product details err', err);
        });
    };
    AddProductComponent.prototype.restrictNegativeValue = function (event) {
        if (+event.target.value < 0) {
            event.target.value = 0;
        }
    };
    AddProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-product',
            template: __webpack_require__(/*! ./add-product.component.html */ "./src/app/core/products/add-product/add-product.component.html"),
            styles: [__webpack_require__(/*! ./add-product.component.css */ "./src/app/core/products/add-product/add-product.component.css")]
        }),
        __metadata("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"],
            _common_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"]])
    ], AddProductComponent);
    return AddProductComponent;
}());



/***/ }),

/***/ "./src/app/core/products/list-products/list-products.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/core/products/list-products/list-products.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-element {\n    position: absolute !important;\n    padding-right: 1vw;\n    right: 20vw;\n    left: 35vw;\n    z-index: 1;\n}\n\n.form-element label {\n    display: inline-block;\n    width: 4vw;\n}\n\n.form-control {\n    display: inline-block !important;\n    width: auto;\n}\n\n.form-element .select-brand{\n    width: 140px;\n}\n\n.no-data-available {\n    text-align: center;\n}\n\n.quantity-input {\n    width: 6vw;\n}\n\n.dataTable td {\n  word-break: break-all;\n}\n\n.zoom {\n    transition: -webkit-transform .2s;\n    transition: transform .2s;\n    transition: transform .2s, -webkit-transform .2s;\n    /* Animation */\n    margin: 0 auto;\n}\n\n​ .zoom:hover {\n    position: absolute;\n    -webkit-transform: scale(5);\n            transform: scale(5);\n    /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */\n    /* margin-left: 3vw; */\n    z-index: 1;\n}\n\ninput[type=\"date\"]::-webkit-inner-spin-button {\n    opacity: 0\n}\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n    background: url(https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/calendar-16.png) center/80% no-repeat;\n    color: rgba(0, 0, 0, 0);\n    opacity: 0.5\n}\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator:hover {\n    background: url(https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/calendar-16.png) center/80% no-repeat;\n    opacity: 0.8\n}\n\n.deactive-product {\n    background-color: lightgrey;\n}\n\n.table-striped>tbody>tr.deactive-product {\n    background-color: lightgrey !important;\n}\n\n.modal-content {\n    background-color: rgba(0, 0, 0, .0001) !important;\n}\n\n.modal-header {\n    padding: 0rem .5rem 0rem 0rem !important;\n    border-bottom: none !important;\n}\n\n.modal-dialog {\n    text-align: center;\n}\n\n.modal-content {\n    display: inline-block;\n}\n\n.col-form-label-sm {\n    text-align: right;\n}\n\n@media (min-width: 768px) {\n    .modal-dialog {\n        width: auto;\n        max-width: auto;\n    }\n}\n\n@media screen and (max-width: 576px){\n    .form-element.product-filters {\n        position: relative !important;\n        left: 15px;\n        padding-bottom: 0;\n        margin-right: 15px;\n    }\n}\n\n@media screen and (max-width: 575px) {\n    .form-element.product-filters .form-control {\n        display: block !important;\n        width: 100%;\n    }\n}\n\n@media screen and (max-width: 1124px) and (min-width: 885px) {\n    .form-element.product-filters {\n        right: 28vw;\n        left: 22vw;\n    }\n}\n\n@media screen and (max-width: 884px) and (min-width: 577px) {\n    .form-element.product-filters {\n      position: relative !important;\n      left: 0;\n    }\n}\n\n#productImage {\n    width: auto;\n    max-width: 100%;\n    max-height: 70vh;\n    width: auto\\9;\n    /* ie8 */\n}\n\n#pdImg:hover {\n  cursor: pointer;\n}\n\n[class*=\" col-\"] {\n  padding-left: 0 !important;\n}\n"

/***/ }),

/***/ "./src/app/core/products/list-products/list-products.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/core/products/list-products/list-products.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" loadingText=\"Loading...\" type=\"ball-scale-multiple\">\n</ngx-spinner>\n<div class=\"form-element product-filters\">\n  <div class=\"form-group row clearfix\">\n    <label class=\"col-md-2 col-sm-2 col-form-label-sm\">Type: </label>\n    <div class=\"col-md-4 col-sm-4\">\n      <select class=\"form-control form-control-sm\" #type (change)=\"selectType(type.value)\">\n        <option selected>ALL</option>\n        <option *ngFor=\"let type of types\" [value]=\"type\">{{type}}</option>\n      </select>\n    </div>\n    <label class=\"col-md-2 col-sm-2 col-form-label-sm\">Brand: </label>\n    <div class=\"col-md-4 col-sm-4\">\n      <select class=\"form-control form-control-sm select-brand\" #brand (change)=\"selectBrand(brand.value)\">\n        <option selected>ALL</option>\n        <option *ngFor=\"let brand of brands\" [value]=\"brand\">{{brand}}</option>\n      </select>\n    </div>\n  </div>\n</div>\n<div class=\"table-responsive\">\n  <div class=\"grid-table-wrapper\">\n    <table id='datTable' datatable [dtOptions]=\"dtOptions\" class=\"table table-bordered table-striped responsive\" cellspacing=\"0\"\n      width=\"100%\">\n      <thead>\n        <tr>\n          <th>Image</th>\n          <th>Brand</th>\n          <th>Type</th>\n          <th>Product Code</th>\n          <th>Description</th>\n          <th  *ngIf=\"userCategory === 'Admin'\">SKU</th>\n          <th>Price</th>\n          <th>Available</th>\n          <th *ngIf=\"userCategory === 'Customer'\">Quantity</th>\n          <th *ngIf=\"userCategory === 'Customer'\">Subtotal</th>\n          <th *ngIf=\"userCategory === 'Admin'\" class=\"text-center\">View</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let product of products; let i = index;\" [ngClass]=\"{'deactive-product':product.productStatus === 'deactive'}\">\n          <td id=\"pdImg\">\n            <img *ngIf=\"!product.image\" src=\"../../../../assets/product_placeholder.png\" alt='image' height=\"42\" width=\"42\" />\n            <img *ngIf=\"product.image\" class=\"zoom\" [src]=\"product.image\" alt=\"image\" height=\"42\" width=\"42\" data-toggle=\"modal\" data-target=\".bd-modal-sm\"\n              (click)=\"openModal(product.image)\">\n          </td>\n          <td>{{ product.brand }}</td>\n          <td>{{ product.type }}</td>\n          <td>{{ product.productCode }}</td>\n          <td>{{ product.description }}</td>\n          <td  *ngIf=\"userCategory === 'Admin'\">{{ product.SKU }}</td>\n          <td>{{ product.price | currency:'USD'}}</td>\n          <td>{{ product.stock }}</td>\n          <td *ngIf=\"userCategory === 'Customer'\">\n            <div class=\"form-group\">\n              <input type=\"number\" class=\"form-control form-control-sm quantity-input\" min=\"0\" max=\"{{product.stock}}\" value=\"{{product.quantity}}\"\n                (input)=\"calculateProductSubTotal($event, product)\">\n            </div>\n          </td>\n          <td *ngIf=\"userCategory === 'Customer'\">{{ product.subtotal | currency:'USD'}}</td>\n          <td text-center *ngIf=\"userCategory === 'Admin'\" class=\"text-center\">\n            <div></div>\n            <a routerLink=\"/product-details/{{product.SKU}}\" class=\"d-inline-block\">\n              <span class=\"btn btn-success btn-sm place-order pull-right\">\n                <i class=\"fa fa-edit\"></i>&nbsp; Edit\n              </span>\n            </a>\n          </td>\n        </tr>\n        <tr *ngIf=\"products?.length == 0\">\n          <td colspan=\"9\" class=\"no-data-available\">No Product Found!</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<div>\n  <!-- <app-item-image-modal modalId=\"imageDialogModal\" blocking=\"true\" [dialogData]=\"imageData\" closebtn=\"true\">\n  </app-item-image-modal> -->\n  <div class=\"modal fade bd-modal-sm\" id=\"imageDialogModal\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <img id=\"productImage\" class=\"img-responsive\" src=\"\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/core/products/list-products/list-products.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/core/products/list-products/list-products.component.ts ***!
  \************************************************************************/
/*! exports provided: ListProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListProductsComponent", function() { return ListProductsComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _models_orderItem_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/orderItem.model */ "./src/app/models/orderItem.model.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_http_request_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/http.request.interceptor */ "./src/app/services/http.request.interceptor.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DataTablesResponse = /** @class */ (function () {
    function DataTablesResponse() {
    }
    return DataTablesResponse;
}());
var ListProductsComponent = /** @class */ (function () {
    function ListProductsComponent(http, productsService, cartService, location, session, spinner) {
        this.http = http;
        this.productsService = productsService;
        this.cartService = cartService;
        this.location = location;
        this.session = session;
        this.spinner = spinner;
        this.dtOptions = {};
        this.productListType = 'All';
        this.userCategory = 'Customer';
        this.columnDefsTarget = [0, 8];
        this.defaultOrder = [1, 'asc'];
        this.tableColumns = [
            { data: 'image' }, { data: 'brand' },
            { data: 'type' }, { data: 'productCode' },
            { data: 'description' }, { data: 'price' },
            { data: 'stock' }, { data: 'quantity' }, { data: 'subtotal' }
        ];
        this.brands = [];
        this.types = [];
        this.selectedType = '';
        this.selectedBrand = '';
        this.productSubTotal = '0.00';
        if (location.path() === '/products/special') {
            this.productListType = 'special';
        }
        else if (location.path() === '/products/new') {
            this.productListType = 'new';
        }
        else {
            this.productListType = 'all';
        }
    }
    ListProductsComponent.prototype.ngOnInit = function () {
        if (this.session.retrieveUserCategory()) {
            this.userCategory = this.session.retrieveUserCategory();
        }
        if (this.userCategory === 'Admin') {
            this.tableColumns = [
                { data: 'image' }, { data: 'brand' },
                { data: 'type' }, { data: 'productCode' },
                { data: 'description' }, { data: 'SKU' }, { data: 'price' },
                { data: 'stock' }, { data: 'view' }
            ];
        }
        else {
            if (this.cartService.getCartItems().length > 0) {
                this.defaultOrder = [7, 'asc'];
            }
        }
        this.getProductsData(); // default
        this.getTypes();
        this.getBrands();
    };
    ListProductsComponent.prototype.getProductsData = function () {
        var _this = this;
        this.spinner.show();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set(_services_http_request_interceptor__WEBPACK_IMPORTED_MODULE_7__["InterceptorSkipHeader"], '');
        this.dtOptions = {
            pagingType: 'simple_numbers',
            serverSide: true,
            autoWidth: false,
            processing: false,
            lengthMenu: [50, 100, 150, 200],
            order: this.defaultOrder,
            ajax: function (dataTablesParameters, callback) {
                _this.http
                    .get(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].baseUrl + '/products', {
                    headers: headers,
                    params: {
                        productListType: _this.productListType,
                        userCategory: _this.userCategory,
                        searchText: dataTablesParameters.search.value,
                        brand: _this.selectedBrand,
                        type: _this.selectedType,
                        pageNo: dataTablesParameters.start + 1,
                        recordsPerPage: dataTablesParameters.length,
                        sdir: dataTablesParameters.order[0]['dir'],
                        column: dataTablesParameters.columns[dataTablesParameters.order[0]['column']]['data']
                    }
                }).subscribe(function (resp) {
                    _this.spinner.hide();
                    _this.products = resp['productList'];
                    // If user is a customer then don't show order with stock 0
                    if (_this.userCategory === 'Customer') {
                        _this.products = _this.products.filter(function (product) {
                            return +product.stock > 0;
                        });
                    }
                    _this.products = _this.products.map(function (o) {
                        o['subtotal'] = 0;
                        o['quanity'] = 0;
                        return o;
                    });
                    if (dataTablesParameters.columns[dataTablesParameters.order[0]['column']]['data'] === 'quantity') {
                        _this.showOrderItemsOnTop(dataTablesParameters.order[0]['dir']);
                    }
                    _this.setQuantityAndSubtotal();
                    callback({
                        recordsTotal: resp['totalProducts'],
                        recordsFiltered: resp['totalProducts'],
                        data: []
                    });
                }, function (error) {
                    _this.spinner.hide();
                    console.log(error);
                });
            },
            columns: this.tableColumns,
            columnDefs: [{
                    targets: this.columnDefsTarget,
                    searchable: false,
                    orderable: false,
                    visible: true
                },
                { width: '15%', targets: 1 },
                { width: '10%', targets: 3 },
                { width: '30%', targets: 4 },
                { width: '7%', targets: 5 },
                { width: '8%', targets: 6 }
            ],
            language: {
                emptyTable: 'No data available in table',
                loadingRecords: 'Please wait ...',
                zeroRecords: 'No matching records found'
            }
        };
    };
    ListProductsComponent.prototype.selectType = function (value) {
        this.selectedType = value;
        $('#datTable').DataTable().column('Type').search(this.selectedType).draw();
    };
    ListProductsComponent.prototype.selectBrand = function (value) {
        this.selectedBrand = value;
        $('#datTable').DataTable().column('brand').search(this.selectedBrand).draw();
    };
    ListProductsComponent.prototype.getBrands = function () {
        var _this = this;
        this.productsService.getBrands().then(function (data) {
            _this.brands = data;
        }, function (error) {
            console.log('service down ', error);
        });
    };
    ListProductsComponent.prototype.getTypes = function () {
        var _this = this;
        this.productsService.getTypes().then(function (data) {
            _this.types = data;
        }, function (error) {
            console.log('service down ', error);
        });
    };
    ListProductsComponent.prototype.calculateProductSubTotal = function (event, product) {
        if (+event.target.value > +product.stock) {
            event.target.value = product.stock;
        }
        if (+event.target.value < 0) {
            event.target.value = 0;
        }
        var quantity = event.target.value === '' ? 0 : event.target.value;
        var productPrice = product.price;
        var subTotal = (quantity * productPrice);
        if (subTotal === 0) {
            product.subtotal = 0;
        }
        else {
            product.subtotal = subTotal;
        }
        this.orderItem = new _models_orderItem_model__WEBPACK_IMPORTED_MODULE_5__["OrderItem"]();
        this.orderItem.setOrderItem(product, quantity, product.subtotal);
        this.cartService.updateCart(this.orderItem);
        this.products = this.products.map(function (o) {
            if (o['_id'] === product._id) {
                o = product;
            }
            return o;
        });
        this.cartService.cartObservable.next('cartUpdated');
    };
    ListProductsComponent.prototype.setQuantityAndSubtotal = function () {
        var cartItems = this.cartService.getCartItems();
        if (cartItems && cartItems.length > 0) {
            for (var i = 0; i < cartItems.length; i++) {
                for (var j = 0; j < this.products.length; j++) {
                    if (cartItems[i].product._id === this.products[j]._id) {
                        this.products[j]['quantity'] = +cartItems[i].quantity;
                        this.products[j]['subtotal'] = cartItems[i].subtotal;
                        break;
                    }
                }
            }
        }
    };
    ListProductsComponent.prototype.showOrderItemsOnTop = function (sortOrder) {
        var cartItems = this.cartService.getCartItems();
        var tempItems = this.products.slice(0, cartItems.length);
        for (var i = 0; i < cartItems.length; i++) {
            tempItems[i]._id = cartItems[i].product._id;
            tempItems[i].image = cartItems[i].product.image;
            tempItems[i].brand = cartItems[i].product.brand;
            tempItems[i].type = cartItems[i].product.type;
            tempItems[i].productCode = cartItems[i].product.productCode;
            tempItems[i].SKU = cartItems[i].product.SKU;
            tempItems[i].description = cartItems[i].product.description;
            tempItems[i].price = cartItems[i].product.price;
            tempItems[i].stock = cartItems[i].product.stock;
            tempItems[i].quantity = cartItems[i].quantity;
        }
        if (sortOrder === 'desc') {
            tempItems = tempItems.sort(function (a, b) {
                return a.quantity - b.quantity;
            });
        }
        else {
            tempItems = tempItems.sort(function (a, b) {
                return b.quantity - a.quantity;
            });
        }
        // following loop will remove cart items from products array(if any)
        if (tempItems.length > 0) {
            for (var i = 0; i < tempItems.length; i++) {
                for (var j = 0; j < this.products.length; j++) {
                    if (this.products[j]._id === tempItems[i]._id) {
                        this.products.splice(j, 1);
                        break;
                    }
                }
            }
        }
        // Add cart items at top of products array
        for (var i = 0; i < tempItems.length; i++) {
            this.products.unshift(tempItems[i]);
        }
    };
    ListProductsComponent.prototype.openModal = function (image) {
        if (image.indexOf('/product_placeholder.png') !== -1) {
            image = image.replace('product_placeholder.png', 'coming_soon.jpg');
        }
        this.productImage = image;
        $('#productImage').attr('src', image);
        $('#imageDialogModal').modal('show');
    };
    ListProductsComponent.prototype.sortBasedOnQuantity = function (sortOrder) {
        if (sortOrder === 'asc') {
            this.products = this.products.sort(function (a, b) {
                return a['quanity'] - b['quanity'];
            });
        }
        else {
            this.products = this.products.sort(function (a, b) {
                return b['quanity'] - a['quanity'];
            });
        }
    };
    ListProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-products',
            template: __webpack_require__(/*! ./list-products.component.html */ "./src/app/core/products/list-products/list-products.component.html"),
            styles: [__webpack_require__(/*! ./list-products.component.css */ "./src/app/core/products/list-products/list-products.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], ListProductsComponent);
    return ListProductsComponent;
}());



/***/ }),

/***/ "./src/app/core/products/upload-products/upload-products.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/core/products/upload-products/upload-products.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n  margin-top: 2vw;\n  margin-bottom: 2vw;\n}\n"

/***/ }),

/***/ "./src/app/core/products/upload-products/upload-products.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/core/products/upload-products/upload-products.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <form>\n                <div class=\"form-group\">\n                    <input type=\"file\" class=\"form-control\" name=\"single\" ng2FileSelect [uploader]=\"uploader\" />\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th width=\"50%\">Name</th>\n                        <th>Size</th>\n                        <th>Progress</th>\n                        <th>Actions</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let item of uploader.queue\">\n                        <td>\n                            <strong>{{ item.file.name }}</strong>\n                        </td>\n                        <td nowrap>{{ item.file.size/1024/1024 | number:'.2' }} MB</td>\n                        <td>\n                            <div class=\"progress\" style=\"margin-bottom: 0;\">\n                                <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n                            </div>\n                        </td>\n                        <td nowrap>\n                            <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                                <button type=\"button\" class=\"btn btn-success btn-xs\" (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                                    <span class=\"glyphicon glyphicon-upload\"></span> Upload\n                                </button>\n                                <button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                                    <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n                                </button>\n                                <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"item.remove()\">\n                                    <span class=\"glyphicon glyphicon-trash\"></span> Remove\n                                </button>\n                            </div>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"text-center\" [ngClass]=\"{ 'text-danger': isFailed,  'text-success': !isFailed}\">\n                {{message}}\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/core/products/upload-products/upload-products.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/core/products/upload-products/upload-products.component.ts ***!
  \****************************************************************************/
/*! exports provided: UploadProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadProductsComponent", function() { return UploadProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadProductsComponent = /** @class */ (function () {
    function UploadProductsComponent(router) {
        this.router = router;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({ url: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'products/upload' });
        this.isFailed = false;
        this.message = '';
    }
    UploadProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uploader.onErrorItem = function (item, response, status, headers) { return _this.onErrorItem(item, response, status, headers); };
        this.uploader.onSuccessItem = function (item, response, status, headers) { return _this.onSuccessItem(item, response, status, headers); };
    };
    UploadProductsComponent.prototype.ngAfterViewInit = function () {
        this.uploader.onAfterAddingFile = (function (item) {
            item.withCredentials = false;
        });
    };
    UploadProductsComponent.prototype.onSuccessItem = function (item, response, status, headers) {
        var _this = this;
        var data = JSON.parse(response); // success server response
        console.log('success', data);
        // this.message = data
        this.isFailed = false;
        if (data.error_code === 1) {
            this.isFailed = true;
            switch (data.err_desc.code) {
                case 11000:
                    this.message = 'Same SKU cannot be used in multiple records';
                    break;
                case 9300:
                    this.message = 'Either you uploaded wrong file type or excel is corrupted';
                    break;
                default:
                    this.message = 'Something went wrong, plese try later';
            }
        }
        else {
            this.message = data.data;
            setTimeout(function () {
                _this.router.navigate(['/products']);
            }, 2000);
        }
    };
    UploadProductsComponent.prototype.onErrorItem = function (item, response, status, headers) {
        var error = JSON.parse(response); // error server response
        console.log('error', error);
        switch (error.err_desc.code) {
            case 11000:
                this.message = 'Same SKU cannot be used in multiple records';
                break;
            default:
                this.message = 'Something went wrong, plese try later';
        }
        this.isFailed = true;
    };
    UploadProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-products',
            template: __webpack_require__(/*! ./upload-products.component.html */ "./src/app/core/products/upload-products/upload-products.component.html"),
            styles: [__webpack_require__(/*! ./upload-products.component.css */ "./src/app/core/products/upload-products/upload-products.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UploadProductsComponent);
    return UploadProductsComponent;
}());



/***/ }),

/***/ "./src/app/core/users/add-address/add-address.component.css":
/*!******************************************************************!*\
  !*** ./src/app/core/users/add-address/add-address.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n  background-color: #fcfbfb;\n  margin-top: 2vw;\n  margin-bottom: 2vw;\n}\n"

/***/ }),

/***/ "./src/app/core/users/add-address/add-address.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/core/users/add-address/add-address.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" loadingText=\"Loading...\" type=\"ball-scale-multiple\">\n</ngx-spinner>\n<div class=\"col-md-8 col-sm-12 mx-auto\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Address Information\n    </div>\n    <div class=\"card-body\">\n      <section class=\"address-information-container clear\">\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <label for=\"attentionTo\" class=\"col-md-3 col-sm-12 text-right col-form-label\">Attention To:</label>\n              <div class=\"col-md-9 col-sm-12\">\n                <input type=\"text\" class=\"form-control\" id=\"attentionTo\" name=\"attentionTo\" [(ngModel)]=\"model.attentionTo\" #attentionTo=\"ngModel\"\n                  [ngClass]=\"{ 'is-invalid': f.submitted && attentionTo.invalid }\" required>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <label for=\"addressLine1\" class=\"col-md-3 col-sm-12 text-right col-form-label\">Address Line1:</label>\n              <div class=\"col-md-9 col-sm-12\">\n                <input type=\"text\" class=\"form-control\" id=\"addressLine1\" name=\"addressLine1\" [(ngModel)]=\"model.addressLine1\" #addressLine1=\"ngModel\"\n                  [ngClass]=\"{ 'is-invalid': f.submitted && addressLine1.invalid }\">\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <label for=\"addressLine2\" class=\"col-md-3 col-sm-12 text-right col-form-label\">Address Line2:</label>\n              <div class=\"col-md-9 col-sm-12\">\n                <input type=\"text\" class=\"form-control\" id=\"addressLine2\" name=\"addressLine2\" [(ngModel)]=\"model.addressLine2\" #addressLine2=\"ngModel\"\n                  [ngClass]=\"{ 'is-invalid': f.submitted && addressLine2.invalid }\">\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <label for=\"city\" class=\"col-md-3 col-sm-12 text-right col-form-label\">City:</label>\n              <div class=\"col-md-9 col-sm-12\">\n                <input type=\"text\" class=\"form-control\" id=\"city\" name=\"city\" [(ngModel)]=\"model.city\" #city=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && city.invalid }\"\n                  required>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <label for=\"state\" class=\"col-md-3 col-sm-12 text-right col-form-label\">State:</label>\n              <div class=\"col-md-9 col-sm-12\">\n                <input type=\"text\" class=\"form-control\" id=\"state\" name=\"state\" [(ngModel)]=\"model.state\" #state=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && state.invalid }\"\n                  required>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <label for=\"zipcode\" class=\"col-md-3 col-sm-12 text-right col-form-label\">Zip Code:</label>\n              <div class=\"col-md-9 col-sm-12\">\n                <input type=\"text\" class=\"form-control\" id=\"zipcode\" name=\"zipcode\" [(ngModel)]=\"model.zipcode\" #zipcode=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && zipcode.invalid }\"\n                  required>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <label for=\"country\" class=\"col-md-3 col-sm-12 text-right col-form-label\">Country:</label>\n              <div class=\"col-md-9 col-sm-12\">\n                <input type=\"text\" class=\"form-control\" id=\"country\" name=\"country\" [(ngModel)]=\"model.country\" #country=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && country.invalid }\"\n                  required>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <label for=\"email\" class=\"col-md-3 col-sm-12 text-right col-form-label\">E-mail:</label>\n              <div class=\"col-md-9 col-sm-12\">\n                <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\"\n                  required>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <label for=\"phone\" class=\"col-md-3 col-sm-12 text-right col-form-label\">Phone:</label>\n              <div class=\"col-md-9 col-sm-12\">\n                <input type=\"text\" class=\"form-control\" id=\"phone\" name=\"phone\" [(ngModel)]=\"model.phone\" #phone=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && phone.invalid }\"\n                  required>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group text-center\" *ngIf=\"!addressId\">\n            <button type=\"submit\" name=\"submitted\" value=\"true\" class=\"btn btn-success place-order\">\n              <i class=\"fa fa-map-marker\"></i> Add\n            </button>\n          </div>\n          <div class=\"form-group text-center\" *ngIf=\"addressId\">\n            <button type=\"submit\" name=\"submitted\" value=\"true\" class=\"btn btn-success place-order\">\n              <i class=\"fa fa-save\"></i> Save\n            </button>\n          </div>\n        </form>\n      </section>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/core/users/add-address/add-address.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/users/add-address/add-address.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAddressComponent", function() { return AddAddressComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/alert/alert.service */ "./src/app/common/alert/alert.service.ts");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/users.service */ "./src/app/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddAddressComponent = /** @class */ (function () {
    function AddAddressComponent(usersService, alertService, route, spinner, location, session) {
        this.usersService = usersService;
        this.alertService = alertService;
        this.route = route;
        this.spinner = spinner;
        this.location = location;
        this.session = session;
        this.model = {};
        this.addressId = this.route.snapshot.paramMap.get('addressId');
    }
    AddAddressComponent.prototype.ngOnInit = function () {
        if (this.addressId) {
            this.getAddress();
        }
    };
    AddAddressComponent.prototype.onSubmit = function () {
        if (this.addressId) {
            this.updateAddress();
        }
        else {
            this.addAddress();
        }
    };
    AddAddressComponent.prototype.addAddress = function () {
        var _this = this;
        this.model['userId'] = this.session.retrieveUserId();
        /** spinner starts */
        this.spinner.show();
        this.usersService.addAddress(this.model).subscribe(function () {
            /** spinner ends */
            _this.spinner.hide();
            _this.alertService.success('Address added successfully.');
            _this.location.back();
        }, function (error) {
            /** spinner ends */
            _this.spinner.hide();
            if (error.status === 0) {
                console.log('service down ', error);
            }
            else {
                _this.alertService.error(error.statusText);
            }
        });
    };
    AddAddressComponent.prototype.updateAddress = function () {
        var _this = this;
        this.spinner.show();
        this.model['userId'] = this.session.retrieveUserId();
        this.usersService.updateAddress(this.model, this.addressId).subscribe(function () {
            _this.spinner.hide();
            _this.alertService.success('Address updated successfully.');
            _this.location.back();
        }, function (error) {
            _this.spinner.hide();
            if (error.status === 0) {
                console.log('service down ', error);
            }
            else {
                _this.alertService.error(error.statusText);
            }
        });
    };
    AddAddressComponent.prototype.getAddress = function () {
        var _this = this;
        this.spinner.show();
        this.usersService.getAddressDetails(this.addressId).subscribe(function (response) {
            _this.spinner.hide();
            _this.model = response;
            _this.model._id = undefined;
        }, function (error) {
            _this.spinner.hide();
            if (error.status === 0) {
                console.log('service down ', error);
            }
            else {
                _this.alertService.error(error.statusText);
            }
        });
    };
    AddAddressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-address',
            template: __webpack_require__(/*! ./add-address.component.html */ "./src/app/core/users/add-address/add-address.component.html"),
            styles: [__webpack_require__(/*! ./add-address.component.css */ "./src/app/core/users/add-address/add-address.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"],
            _common_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"],
            _services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]])
    ], AddAddressComponent);
    return AddAddressComponent;
}());



/***/ }),

/***/ "./src/app/core/users/contact-info/contact-info.component.css":
/*!********************************************************************!*\
  !*** ./src/app/core/users/contact-info/contact-info.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\n    margin-left : 3px;\n}\n.card {\n    background-color: #fcfbfb;\n    margin-top: 22px;\n}"

/***/ }),

/***/ "./src/app/core/users/contact-info/contact-info.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/core/users/contact-info/contact-info.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" loadingText=\"Loading...\" type=\"ball-scale-multiple\">\n</ngx-spinner>\n<section class=\"contact-information-container\">\n  <h4 class=\"contact-information-title text-center\">Contact Information</h4>\n  <p class=\"text-center\">Please, fill out the following information to complete the order.</p>\n  <div class=\"center-block text-center\">\n    <a [routerLink]=\"['/addresses/add-address']\">\n      <button class=\"btn btn-success btn-sm\">\n        <i class=\"fa fa-plus\"></i> Add Address</button>\n    </a>\n    <a [routerLink]=\"['/addresses']\">\n      <button class=\"btn btn-success btn-sm\">\n        <i class=\"fa fa-map-marker\"></i> Manage Addresses</button>\n    </a>\n  </div>\n<form  name=\"form\"   (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n  <div class=\"col-md-8 col-sm-12 mx-auto\">\n      <div class=\"card\">\n          <div class=\"card-body\">\n            <div class=\"card-text\">\n              <div class=\"form-group row\">\n                <label for=\"addressId\" class=\"col-md-3 col-sm-12 text-right col-form-label\">Ship to:</label>\n                <div class=\"col-md-9 col-sm-12\">\n                  <select id=\"addressId\" class=\"form-control\" name=\"addressId\" [(ngModel)]=\"model.addressId\" #addressId=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted }\" required>\n                    <option [ngValue]='addressId' disabled>Select</option>\n                    <option value=\"{{address._id}}\" *ngFor=\"let address of addresses\">\n                      <!-- X ( ABC 123 CA, CA 222222 INDIA) -->\n                      {{  address.attentionTo + \" (\" + address.addressLine1 + (address.addressLine2 ? address.addressLine2 : '') +\n                      \", \"+ address.country + \", \"+ address.state + ', ' + address.city + \"-\" + address.zipcode +\")\" }}\n                    </option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label for=\"userRemarks\" class=\"col-md-3 col-sm-12 text-right col-form-label\">Notes:</label>\n                <div class=\"col-md-9 col-sm-12\">\n                  <textarea class=\"form-control\" rows=\"4\" placeholder=\"Comments or Instructions\" id=\"userRemarks\" name=\"userRemarks\" [(ngModel)]=\"model.userRemarks\" #userRemarks=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && userRemarks.invalid }\"></textarea>\n                </div>\n              </div>\n              <div class=\"form-group text-center\">\n                <button type=\"submit\" name=\"submitted\" value=\"true\" class=\"btn btn-success btn-sm place-order\" [disabled]='!f.form.valid'>\n                  <i class=\"fa fa-send-o\"></i> Place Order\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n    </div>\n</form>\n</section>\n"

/***/ }),

/***/ "./src/app/core/users/contact-info/contact-info.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/users/contact-info/contact-info.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContactInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactInfoComponent", function() { return ContactInfoComponent; });
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _common_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/alert/alert.service */ "./src/app/common/alert/alert.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/users.service */ "./src/app/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ContactInfoComponent = /** @class */ (function () {
    function ContactInfoComponent(usersService, alertService, cartService, session, router, spinner) {
        this.usersService = usersService;
        this.alertService = alertService;
        this.cartService = cartService;
        this.session = session;
        this.router = router;
        this.spinner = spinner;
        this.addresses = [];
        this.model = {};
        this.addressId = 'select'; // default select value
    }
    ContactInfoComponent.prototype.ngOnInit = function () {
        this.userId = this.session.retrieveUserId();
        this.getAddressesList();
    };
    ContactInfoComponent.prototype.onSubmit = function () {
        var _this = this;
        var orderData = this.prepareOrderData();
        this.spinner.show();
        this.cartService.saveOrder(orderData).subscribe(function () {
            _this.spinner.hide();
            _this.alertService.success('Order placed successfully.');
            _this.session.removeCartData();
            _this.cartService.clearCart();
            _this.router.navigate(['/order-placed']);
            _this.cartService.cartObservable.next('cartUpdated');
        }, function (error) {
            _this.spinner.hide();
            if (error.status === 0) {
                console.log('service down ', error);
            }
            else {
                _this.alertService.error(error.statusText);
            }
        });
    };
    ContactInfoComponent.prototype.getAddressesList = function () {
        var _this = this;
        this.spinner.show();
        this.usersService.getAddresses(this.userId).subscribe(function (resp) {
            _this.spinner.hide();
            _this.addresses = resp;
        }, function (error) {
            _this.spinner.hide();
            if (error.status === 0) {
                console.log('service down ', error);
            }
            else {
                _this.alertService.error(error.statusText);
            }
        });
    };
    ContactInfoComponent.prototype.prepareOrderData = function () {
        var orderData = {};
        orderData['customerId'] = this.userId;
        orderData['addressId'] = this.model.addressId;
        orderData['userRemarks'] = this.model.userRemarks;
        var cartItems = this.cartService.getCartItems();
        var orderAmount = 0;
        var orderItems = [];
        for (var i = 0; i < cartItems.length; i++) {
            orderAmount += cartItems[i].subtotal;
            orderItems.push({ 'productId': cartItems[i].product._id, 'quantity': cartItems[i].quantity, 'SKU': cartItems[i].product.SKU });
        }
        orderData['orderItems'] = orderItems;
        orderData['orderAmount'] = orderAmount;
        orderData['orderStatus'] = 'Pending';
        return orderData;
    };
    ContactInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-info',
            template: __webpack_require__(/*! ./contact-info.component.html */ "./src/app/core/users/contact-info/contact-info.component.html"),
            styles: [__webpack_require__(/*! ./contact-info.component.css */ "./src/app/core/users/contact-info/contact-info.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"],
            _common_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"],
            _services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_0__["NgxSpinnerService"]])
    ], ContactInfoComponent);
    return ContactInfoComponent;
}());



/***/ }),

/***/ "./src/app/core/users/core/users/message/message.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/core/users/core/users/message/message.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/users/core/users/message/message.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/core/users/core/users/message/message.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  {{message}}\n</p>\n"

/***/ }),

/***/ "./src/app/core/users/core/users/message/message.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/users/core/users/message/message.component.ts ***!
  \********************************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageComponent = /** @class */ (function () {
    function MessageComponent(route, userService) {
        this.route = route;
        this.userService = userService;
    }
    MessageComponent.prototype.ngOnInit = function () {
        this.token = this.route.snapshot.params['token'];
        if (this.token) {
            this.verifyUserEmail();
        }
    };
    MessageComponent.prototype.verifyUserEmail = function () {
        var _this = this;
        this.userService.verifyEmail(this.token).subscribe(function (data) {
            _this.message = data.message;
        }, function (err) {
            _this.message = err.error.message;
            console.log('product details err', err.error.message);
        });
    };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/core/users/core/users/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/core/users/core/users/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_0__["UsersService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/core/users/forget-password/forget-password.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/core/users/forget-password/forget-password.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/users/forget-password/forget-password.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/core/users/forget-password/forget-password.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" loadingText=\"Loading...\" type=\"ball-scale-multiple\">\n</ngx-spinner>\n<div class=\"row\">\n  <div class=\"col-sm-8 mx-auto\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Forgot Password?\n      </div>\n      <div class=\"card-body\">\n        <section class=\"user-information-container clear\">\n          <form (ngSubmit)=\"forgetPasswordForm.form.valid && onSubmit(forgetPasswordForm, requestType)\" #forgetPasswordForm=\"ngForm\"\n            novalidate>\n            <p *ngIf=\"requestType === 'resend'\" class=\"text-center\">Please, enter your e-mail address to resend verification mail.</p>\n            <p *ngIf=\"requestType === 'reset'\" class=\"text-center\">Please, enter your e-mail address to reset your password</p>\n            <div class=\"form-group row\">\n              <label for=\"email\" class=\"col-md-3 col-sm-12 col-form-label text-right\">E-mail:</label>\n              <div class=\"col-md-9 col-sm-12\">\n                <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" placeholder=\"E-mail\" [(ngModel)]=\"email\" aria-required=\"true\"\n                  required>\n              </div>\n            </div>\n\n            <div class=\"form-group text-center\">\n              <button *ngIf=\"requestType === 'reset'\" type=\"submit\" name=\"submitted\" value=\"true\" class=\"btn btn-success btn-sm place-order\"\n                [disabled]=\"!forgetPasswordForm.form.valid\">\n                <i class=\"fa fa-key\"></i> Reset Password\n              </button>\n\n              <button *ngIf=\"requestType === 'resend'\" type=\"submit\" name=\"submit\" value=\"true\" class=\"btn btn-success btn-sm place-order\"\n                [disabled]=\"!forgetPasswordForm.form.valid\">\n                <i class=\"fa fa-key\"></i> Verify Account\n              </button>\n            </div>\n            <div class=\"text-center\">\n              <h6 class=\"contact-information-title text-center\">New user?\n                <a href=\"./#/user/register\">Create an account here</a>\n              </h6>\n            </div>\n          </form>\n        </section>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/core/users/forget-password/forget-password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/core/users/forget-password/forget-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: ForgetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function() { return ForgetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/alert/alert.service */ "./src/app/common/alert/alert.service.ts");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/users.service */ "./src/app/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent(usersService, alertService, session, spinner, router, activeRoute) {
        var _this = this;
        this.usersService = usersService;
        this.alertService = alertService;
        this.session = session;
        this.spinner = spinner;
        this.router = router;
        this.activeRoute = activeRoute;
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.requestType = params['type'];
        });
    }
    ForgetPasswordComponent.prototype.ngOnInit = function () {
        this.session.destroy();
    };
    ForgetPasswordComponent.prototype.onSubmit = function (form, type) {
        var _this = this;
        /** spinner starts */
        this.spinner.show();
        if (type === 'reset') {
            this.usersService.forgotPassword(form.controls['email'].value).subscribe(function (data) {
                /** spinner ends */
                _this.spinner.hide();
                _this.alertService.success(data.message, true);
                _this.router.navigate(['/user/login']);
            }, function (error) {
                /** spinner ends */
                _this.spinner.hide();
                console.log('error', error);
                _this.alertService.error(error.error.message, true);
            });
        }
        else {
            this.usersService.resendVerificationMail(form.controls['email'].value).subscribe(function (data) {
                /** spinner ends */
                _this.spinner.hide();
                _this.alertService.success(data.message, true);
                _this.router.navigate(['/user/login']);
            }, function (error) {
                /** spinner ends */
                _this.spinner.hide();
                console.log('error', error);
                _this.alertService.error(error.error.message, true);
            });
        }
    };
    ForgetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forget-password',
            template: __webpack_require__(/*! ./forget-password.component.html */ "./src/app/core/users/forget-password/forget-password.component.html"),
            styles: [__webpack_require__(/*! ./forget-password.component.css */ "./src/app/core/users/forget-password/forget-password.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"],
            _common_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/core/users/list-addresses/list-addresses.component.css":
/*!************************************************************************!*\
  !*** ./src/app/core/users/list-addresses/list-addresses.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".success-information-container {\n    padding: 30px 15px;\n}\nspan{\n    margin-left : 3px;\n}\n.summary-block {\n    padding: 30px;\n    background-color: #fff;\n    border-top: solid 3px #337AB7;\n}\n.mb15 {\n    margin-bottom: 15px;\n}\n.row{\n    background: #fbfbfb;\n}\n.place-order {\n    margin-top: 25px;\n}"

/***/ }),

/***/ "./src/app/core/users/list-addresses/list-addresses.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/core/users/list-addresses/list-addresses.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" loadingText=\"Loading...\" type=\"ball-scale-multiple\">\n</ngx-spinner>\n<section class=\"success-information-container\" >\n  <div *ngFor=\"let address of addresses\">  \n    <div class=\"summary-block center-block mb15\">\n      <div class=\"row\">\n        <div class=\"col-md-6 col-sm-12\">\n          {{ address.attentionTo }}<br>\n          {{ address.addressLine1 }}\n          {{ address.addressLine2 }}<br>\n          {{ address.state + ', ' + address.city + \"-\" + address.zipcode}}<br>\n          {{ address.country }}<br>\n          {{ address.email }}<br>\n          {{address.phone}}<br>\n        </div>\n        <div class=\"col-md-6 col-sm-12\">\n\n          <span class=\"btn btn-danger btn-sm place-order pull-right ml10 delete-address\" (click)=\"deleteAddress(address._id)\">\n            <i class=\"fa fa-trash\"></i> Delete\n          </span>\n\n          <a routerLink=\"/addresses/edit-address/{{address._id}}\">\n          <span class=\"btn btn-success btn-sm place-order pull-right\">\n            <i class=\"fa fa-pencil\"></i> Edit\n          </span>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"addresses.length === 0\" >\n      <h2 style=\"text-align: center;\">No address is added yet</h2>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/core/users/list-addresses/list-addresses.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/users/list-addresses/list-addresses.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListAddressesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAddressesComponent", function() { return ListAddressesComponent; });
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _common_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/alert/alert.service */ "./src/app/common/alert/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListAddressesComponent = /** @class */ (function () {
    function ListAddressesComponent(usersService, alertService, router, session, spinner) {
        this.usersService = usersService;
        this.alertService = alertService;
        this.router = router;
        this.session = session;
        this.spinner = spinner;
        this.addresses = [];
    }
    ListAddressesComponent.prototype.ngOnInit = function () {
        this.getAddressesList();
    };
    ListAddressesComponent.prototype.getAddressesList = function () {
        var _this = this;
        var userId = this.session.retrieveUserId();
        this.spinner.show();
        this.usersService.getAddresses(userId).subscribe(function (resp) {
            _this.spinner.hide();
            _this.addresses = resp;
        }, function (error) {
            _this.spinner.hide();
            if (error.status === 0) {
                console.log('service down ', error);
            }
            else {
                _this.alertService.error(error.statusText);
            }
        });
    };
    ListAddressesComponent.prototype.deleteAddress = function (addressId) {
        var _this = this;
        this.spinner.show();
        this.usersService.deleteAddress(addressId).subscribe(function () {
            // this.alertService.success('Address deleted successfully.');
            _this.spinner.hide();
            _this.addresses = _this.addresses.filter(function (address) { return address._id !== addressId; });
        }, function (error) {
            _this.spinner.hide();
            if (error.status === 0) {
                console.log('service down ', error);
            }
            else {
                _this.alertService.error(error.statusText);
            }
        });
    };
    ListAddressesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-list-addresses',
            template: __webpack_require__(/*! ./list-addresses.component.html */ "./src/app/core/users/list-addresses/list-addresses.component.html"),
            styles: [__webpack_require__(/*! ./list-addresses.component.css */ "./src/app/core/users/list-addresses/list-addresses.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"],
            _common_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_0__["NgxSpinnerService"]])
    ], ListAddressesComponent);
    return ListAddressesComponent;
}());



/***/ }),

/***/ "./src/app/core/users/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/core/users/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-information-container {\n    margin:  auto;\n}\n.link{\n    color: rgb(6, 114, 202) !important;\n\n}\n.card {\n    background-color: #fcfbfb;\n  }\n\n"

/***/ }),

/***/ "./src/app/core/users/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/core/users/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" loadingText=\"Loading...\" type=\"ball-scale-multiple\">\n</ngx-spinner>\n<div class=\"col-sm-8 mx-auto\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Login\n    </div>\n    <div class=\"card-body\">\n      <form name=\"form\" class=\"form-horizontal\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <label for=\"brand\" class=\"col-sm-3 text-right col-form-label\">Email:</label>\n            <div class=\"col-sm-9\">\n              <input type=\"text\" class=\"form-control\" id=\"email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" name=\"email\" [(ngModel)]=\"model.email\"\n                #email=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\" required>\n              <div [hidden]=\"email.valid || email.untouched\">\n                <small *ngIf=\"email.errors && email.errors.required\" class=\"form-text text-left error-msg\">Email is required</small>\n                <small *ngIf=\"email.errors && email.errors.pattern\" class=\"form-text text-left error-msg\">Email is invalid</small>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <label for=\"type\" class=\"col-sm-3 text-right col-form-label\">Password:</label>\n            <div class=\"col-sm-9\">\n              <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\" required>\n              <div [hidden]=\"password.valid || password.untouched\">\n                <small *ngIf=\"password.errors && password.errors.required\" class=\"form-text text-left error-msg\">Password is required</small>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group text-center\">\n          <button type=\"submit\" name=\"submitted\" value=\"true\" class=\"btn btn-success btn-sm place-order\" [disabled]='!f.form.valid'>\n            <i class=\"fa fa-send-o\"></i> Login\n          </button>\n        </div>\n      </form>\n      <br/>\n\n      <div class=\"text-center\">\n        <h6 class=\"text-center\">New user?\n          <a href=\"./#/user/register\">Create an account here</a>\n        </h6>\n      </div>\n\n      <div class=\"text-center\">\n        <h6 class=\" text-center\">Forgot Password?\n          <a href=\"./#/user/forgot?type=reset\">Reset Password</a>\n        </h6>\n      </div>\n      <div class=\"text-center\">\n        <a href=\"./#/user/forgot?type=resend\">\n          RESEND VERIFICATION EMAIL\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/core/users/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/users/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/alert/alert.service */ "./src/app/common/alert/alert.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/users.service */ "./src/app/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(usersService, alertService, session, authService, spinner, router) {
        this.usersService = usersService;
        this.alertService = alertService;
        this.session = session;
        this.authService = authService;
        this.spinner = spinner;
        this.router = router;
        this.model = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        /** spinner starts */
        this.spinner.show();
        this.usersService.login(this.model).subscribe(function (data) {
            /** spinner ends */
            _this.spinner.hide();
            _this.session.saveToken(data.token['accessToken']);
            _this.session.saveUserId(data.user['_id']);
            _this.session.saveUserData(JSON.stringify(data.user));
            _this.alertService.success('You are logged in successfully.', true);
            _this.authService.isLoggedIn.next(true);
            if (_this.session.retrieveCartData() && _this.session.retrieveCartData().length > 0) {
                _this.router.navigate(['/order']);
            }
            else {
                _this.router.navigate(['/products']);
            }
        }, function (error) {
            /** spinner ends */
            _this.spinner.hide();
            if (error.status === 0) {
                console.log('service down ', error);
            }
            else {
                _this.alertService.error(error.error.message);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/core/users/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/core/users/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"],
            _common_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/core/users/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/core/users/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.card {\n    background-color: #fcfbfb;\n  }"

/***/ }),

/***/ "./src/app/core/users/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/core/users/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" loadingText=\"Loading...\" type=\"ball-scale-multiple\">\n</ngx-spinner>\n<div class=\"col-md-8 col-sm-12 mx-auto\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Contact Information\n    </div>\n    <div class=\"card-body\">\n      <form name=\"form\" class=\"form-horizontal\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <label for=\"firstName\" class=\"col-md-3 col-sm-12 text-right col-form-label\">First Name:</label>\n            <div class=\"col-md-9 col-sm-12\">\n              <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && firstName.invalid }\" required>\n              <small *ngIf=\"f.submitted && firstName.invalid\" id=\"emailHelp\" class=\"form-text text-left error-msg\">First name is required</small>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <label for=\"lastName\" class=\"col-md-3 col-sm-12 text-right col-form-label\">Last Name:</label>\n            <div class=\"col-md-9 col-sm-12\">\n              <input type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\">\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <label for=\"companyName\" class=\"col-md-3 col-sm-12 text-right col-form-label\">Company Name:</label>\n            <div class=\"col-md-9 col-sm-12\">\n              <input type=\"text\" class=\"form-control\" id=\"companyName\" name=\"companyName\" [(ngModel)]=\"model.companyName\" #companyName=\"ngModel\">\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <label for=\"phoneNumber\" class=\"col-md-3 col-sm-12 text-right col-form-label\">Phone Number:</label>\n            <div class=\"col-md-9 col-sm-12\">\n              <input type=\"text\" class=\"form-control\" id=\"phoneNumber\" name=\"phoneNumber\" [(ngModel)]=\"model.phoneNumber\" #phoneNumber=\"ngModel\" pattern=\"[0-9]{10}\">\n              <small *ngIf=\"f.submitted && phoneNumber.invalid && phoneNumber.errors.pattern\" class=\"form-text text-left error-msg\">Phone number is invalid</small>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <label for=\"mobileNumber\" class=\"col-md-3 col-sm-12 text-right col-form-label\">Mobile Number:</label>\n            <div class=\"col-md-9 col-sm-12\">\n              <input type=\"text\" class=\"form-control\" id=\"mobileNumber\" name=\"mobileNumber\" [(ngModel)]=\"model.mobileNumber\" #mobileNumber=\"ngModel\" pattern=\"[0-9]{10}\">\n              <small *ngIf=\"f.submitted && mobileNumber.invalid && mobileNumber.errors.pattern\" class=\"form-text text-left error-msg\">Mobile number is invalid</small>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <label for=\"email\" class=\"col-md-3 col-sm-12 text-right col-form-label\">E-mail:</label>\n            <div class=\"col-md-9 col-sm-12\">\n              <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\" required>\n              <small *ngIf=\"f.submitted && email.invalid && email.errors.required\" class=\"form-text text-left error-msg\">Email is required</small>\n              <small *ngIf=\"f.submitted && email.invalid && email.errors.pattern\" class=\"form-text text-left error-msg\">Email is invalid</small>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <label for=\"password\" class=\"col-md-3 col-sm-12 text-right col-form-label\">Password:</label>\n            <div class=\"col-md-9 col-sm-12\">\n              <input type=\"password\" class=\"form-control\" id=\"password\" minlength=\"6\" maxlength=\"15\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\"\n                [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\" [required]=\"!isUserExists\" validateEqual=\"confirmPassword\"\n                reverse=\"true\">\n              <small *ngIf=\"password.errors?.minlength\" class=\"form-text text-left error-msg\">\n                Password must be at least 6 characters long.\n              </small>\n              <small *ngIf=\"f.submitted && password.invalid\" class=\"form-text text-left error-msg\">Password is required(minimum 6 character)</small>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <label for=\"confirmPassword\" class=\"col-md-3 col-sm-12 text-right col-form-label\">Re-type Password:</label>\n            <div class=\"col-md-9 col-sm-12\">\n              <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" name='confirmPassword' minlength=\"6\" maxlength=\"15\" [(ngModel)]=\"model.confirmPassword\"\n                #confirmPassword=\"ngModel\" validateEqual=\"password\" [required]=\"!isUserExists\">\n              <div [hidden]=\"confirmPassword.untouched\">\n                <small *ngIf=\"f.submitted && !confirmPassword.valid\" class=\"form-text text-left error-msg\">Password mismatch</small>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group text-center\">\n          <button type=\"submit\" name=\"submitted\" value=\"true\" class=\"btn btn-success btn-sm place-order\">\n            <i class=\"fa fa-send-o\"></i> {{ buttonLabel }}\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/core/users/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/users/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/alert/alert.service */ "./src/app/common/alert/alert.service.ts");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/users.service */ "./src/app/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(usersService, alertService, session, spinner, router) {
        this.usersService = usersService;
        this.alertService = alertService;
        this.session = session;
        this.spinner = spinner;
        this.router = router;
        this.model = {};
        this.buttonLabel = 'Register';
        this.isUserExists = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        if (this.session.retrieveUserData()) {
            this.model = JSON.parse(this.session.retrieveUserData());
            this.model.password = undefined;
            this.buttonLabel = 'Update';
            this.isUserExists = true;
        }
        else {
            this.buttonLabel = 'Register';
            this.isUserExists = false;
        }
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.buttonLabel === 'Register') {
            /** spinner starts */
            this.spinner.show();
            this.model['category'] = 'Customer';
            this.usersService.register(this.model).subscribe(function (data) {
                /** spinner ends */
                _this.spinner.hide();
                _this.alertService.success(data.message, true);
                _this.router.navigate(['/user/login']);
            }, function (error) {
                /** spinner ends */
                _this.spinner.hide();
                console.log(error.error.message);
                _this.alertService.error(error.error.message, true);
            });
        }
        else {
            /** spinner starts */
            this.spinner.show();
            this.usersService.updateUser(this.model, this.session.retrieveUserId()).subscribe(function (data) {
                /** spinner ends */
                _this.spinner.hide();
                _this.alertService.success('User updated successfully.', true);
                data.password = undefined;
                _this.session.saveUserData(JSON.stringify(data));
                _this.alertService.success('User Updated successfully.', true);
            }, function (error) {
                /** spinner ends */
                _this.spinner.hide();
                _this.alertService.error(error.statusText);
                if (error.status === 0) {
                    console.log('service down ', error);
                }
                else {
                    _this.alertService.error(error.statusText);
                }
            });
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/core/users/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/core/users/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"],
            _common_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/core/users/reset-password/reset-password.component.css":
/*!************************************************************************!*\
  !*** ./src/app/core/users/reset-password/reset-password.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/users/reset-password/reset-password.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/core/users/reset-password/reset-password.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" loadingText=\"Loading...\" type=\"ball-scale-multiple\">\n</ngx-spinner>\n<div class=\"row\">\n  <div class=\"col-sm-8 mx-auto\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Reset Password?\n      </div>\n      <div class=\"card-body\">\n        <section class=\"user-information-container clear\">\n          <form (ngSubmit)=\"f.form.valid && onSubmit(f)\" #f=\"ngForm\" novalidate>\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <label for=\"password\" class=\"col-sm-3 text-right col-form-label\">Password:</label>\n                <div class=\"col-sm-9\">\n                  <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\"\n                    [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\" required validateEqual=\"confirmPassword\"\n                    reverse=\"true\">\n                  <div [hidden]=\"password.valid || password.untouched\">\n                    <small *ngIf=\"password.errors && password.errors.required\" class=\"form-text text-left error-msg\">Password is required(minimum 6 character)</small>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <label for=\"confirmPassword\" class=\"col-sm-3 text-right col-form-label\">Re-type Password:</label>\n                <div class=\"col-sm-9\">\n                  <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" name='confirmPassword' [(ngModel)]=\"model.confirmPassword\"\n                    #confirmPassword=\"ngModel\" validateEqual=\"password\" required>\n                  <div [hidden]=\"confirmPassword.untouched\">\n                    <small *ngIf=\"f.submitted && !confirmPassword.valid\" class=\"form-text text-left error-msg\">Password mismatch</small>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group text-center\">\n              <button type=\"submit\" name=\"submitted\" value=\"true\" class=\"btn btn-success btn-sm place-order\">\n                <i class=\"fa fa-send-o\"></i> Reset Password\n              </button>\n            </div>\n          </form>\n        </section>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/core/users/reset-password/reset-password.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/users/reset-password/reset-password.component.ts ***!
  \***********************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _common_alert_alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/alert/alert.service */ "./src/app/common/alert/alert.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(usersService, alertService, router, spinner, activeRoute) {
        var _this = this;
        this.usersService = usersService;
        this.alertService = alertService;
        this.router = router;
        this.spinner = spinner;
        this.activeRoute = activeRoute;
        this.model = {};
        this.activeRoute.params.subscribe(function (params) { return _this.token = params.token; });
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
    };
    ResetPasswordComponent.prototype.onSubmit = function (form) {
        var _this = this;
        /** spinner starts */
        this.spinner.show();
        this.usersService.resetPassword(this.token, this.model).subscribe(function (data) {
            /** spinner ends */
            _this.spinner.hide();
            _this.alertService.success(data.message, true);
            _this.router.navigate(['/user/login']);
        }, function (error) {
            /** spinner ends */
            _this.spinner.hide();
            console.log(error.error.message);
            _this.alertService.error(error.error.message, true);
        });
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/core/users/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/core/users/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"],
            _common_alert_alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/directives/equal-validator.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/directives/equal-validator.directive.ts ***!
  \*********************************************************/
/*! exports provided: EqualValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqualValidatorDirective", function() { return EqualValidatorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidatorDirective = /** @class */ (function () {
    function EqualValidatorDirective(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    EqualValidatorDirective_1 = EqualValidatorDirective;
    Object.defineProperty(EqualValidatorDirective.prototype, "isReverse", {
        get: function () {
            if (!this.reverse) {
                return false;
            }
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidatorDirective.prototype.validate = function (c) {
        // self value
        var v = c.value;
        // control vlaue
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length) {
                e.setErrors(null);
            }
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false
            });
        }
        return null;
    };
    EqualValidatorDirective = EqualValidatorDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return EqualValidatorDirective_1; }),
                    multi: true
                }
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('validateEqual')),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"])('reverse')),
        __metadata("design:paramtypes", [String, String])
    ], EqualValidatorDirective);
    return EqualValidatorDirective;
    var EqualValidatorDirective_1;
}());



/***/ }),

/***/ "./src/app/models/orderItem.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/orderItem.model.ts ***!
  \*******************************************/
/*! exports provided: OrderItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItem", function() { return OrderItem; });
var OrderItem = /** @class */ (function () {
    function OrderItem() {
    }
    OrderItem.prototype.setOrderItem = function (product, quantity, subtotal) {
        this.product = product;
        this.quantity = quantity;
        this.subtotal = subtotal;
    };
    return OrderItem;
}());



/***/ }),

/***/ "./src/app/services/admin.guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/admin.guard.service.ts ***!
  \*************************************************/
/*! exports provided: AdminGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuardService", function() { return AdminGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session.service */ "./src/app/services/session.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuardService = /** @class */ (function () {
    function AdminGuardService(session, router) {
        this.session = session;
        this.router = router;
    }
    AdminGuardService.prototype.canActivate = function () {
        var user = this.session.retrieveUserData();
        var token = this.session.retrieveToken();
        if (token != null && JSON.parse(user).category === 'Admin') {
            return true;
        }
        this.router.navigate(['products']);
        return false;
    };
    AdminGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminGuardService);
    return AdminGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth.guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth.guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session.service */ "./src/app/services/session.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(session, router) {
        this.session = session;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.session.retrieveToken()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AuthenticationService = /** @class */ (function () {
    function AuthenticationService() {
        this.isLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CartService = /** @class */ (function () {
    function CartService(httpClient) {
        this.httpClient = httpClient;
        this.orderItems = [];
        this.cartObservable = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.ORDERS_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl + 'orders';
    }
    CartService.prototype.updateCart = function (orderItem) {
        if (this.indexOf(orderItem) === -1) {
            if (orderItem.quantity !== 0) {
                this.orderItems.push(orderItem);
            }
        }
        else {
            var index = this.indexOf(orderItem);
            if (orderItem.quantity === 0) {
                this.orderItems.splice(index, 1);
            }
            else {
                this.orderItems.splice(index, 1, orderItem);
            }
        }
    };
    CartService.prototype.addItem = function (orderItem) {
        if (this.indexOf(orderItem) === -1) {
            orderItem.quantity = 1;
            orderItem.subtotal = orderItem.quantity * orderItem.product.price;
            this.orderItems.push(orderItem);
        }
        else {
            var index = this.indexOf(orderItem);
            this.orderItems[index].quantity++;
            this.orderItems[index].subtotal = this.orderItems[index].quantity * this.orderItems[index].product.price;
        }
    };
    CartService.prototype.removeItem = function (orderItem) {
        if (this.indexOf(orderItem) !== -1) {
            var index = this.indexOf(orderItem);
            if (this.orderItems[index].quantity > 1) {
                this.orderItems[index].quantity--;
                this.orderItems[index].subtotal = this.orderItems[index].product.price * this.orderItems[index].quantity;
            }
            else {
                this.orderItems.splice(index, 1);
            }
        }
    };
    CartService.prototype.indexOf = function (orderItem) {
        for (var index = 0; index < this.orderItems.length; index++) {
            if (this.orderItems[index].product.SKU === orderItem.product.SKU) {
                return index;
            }
        }
        return -1;
    };
    CartService.prototype.getCartItems = function () {
        return this.orderItems;
    };
    CartService.prototype.setCartItems = function (cartItems) {
        var itemsCount = cartItems.length;
        for (var i = 0; i < itemsCount; i++) {
            this.orderItems.push(cartItems[i]);
        }
    };
    CartService.prototype.clearCart = function () {
        this.orderItems.splice(0, this.orderItems.length);
    };
    CartService.prototype.saveOrder = function (data) {
        return this.httpClient.post(this.ORDERS_URL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error); }));
    };
    CartService.prototype.getOrders = function (fromDate, toDate, orderStatus) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        params = params.append('fromDate', fromDate);
        params = params.append('toDate', toDate);
        params = params.append('orderStatus', orderStatus);
        return this.httpClient.get(this.ORDERS_URL, { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Promise.reject(err); }));
    };
    CartService.prototype.getOrderDetails = function (orderId) {
        return this.httpClient.get(this.ORDERS_URL + '/' + orderId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Promise.reject(err); }));
    };
    CartService.prototype.updateOrder = function (data, orderId) {
        return this.httpClient.patch(this.ORDERS_URL + '/' + orderId, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error); }));
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/services/http.request.interceptor.ts":
/*!******************************************************!*\
  !*** ./src/app/services/http.request.interceptor.ts ***!
  \******************************************************/
/*! exports provided: InterceptorSkipHeader, HttpsRequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorSkipHeader", function() { return InterceptorSkipHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpsRequestInterceptor", function() { return HttpsRequestInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session.service */ "./src/app/services/session.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InterceptorSkipHeader = 'X-Skip-Interceptor';
var HttpsRequestInterceptor = /** @class */ (function () {
    function HttpsRequestInterceptor(session) {
        this.session = session;
    }
    HttpsRequestInterceptor.prototype.intercept = function (req, next) {
        if (req.headers.has(InterceptorSkipHeader)) {
            var headers = req.headers.delete(InterceptorSkipHeader);
            return next.handle(req.clone({ headers: headers }));
        }
        else {
            if (this.session.retrieveToken() != null) {
                req = req.clone({
                    setHeaders: {
                        authorization: 'Bearer ' + this.session.retrieveToken()
                    }
                });
            }
            return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) {
                return event;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
                if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                    if (err.status === 401 || err.status === 403) {
                        console.log('unauthorized user');
                    }
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
                }
            }));
        }
    };
    HttpsRequestInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])
    ], HttpsRequestInterceptor);
    return HttpsRequestInterceptor;
}());



/***/ }),

/***/ "./src/app/services/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _http_request_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http.request.interceptor */ "./src/app/services/http.request.interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductsService = /** @class */ (function () {
    function ProductsService(httpClient) {
        this.httpClient = httpClient;
        this.PRODUCTS_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + 'products';
        this.GET_BRAND = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + 'products/brands';
        this.GET_TYPES = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + 'products/types';
        this.GET_PRODUCT_CODE = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + 'products/sku';
    }
    ProductsService.prototype.addProduct = function (data) {
        return this.httpClient.post(this.PRODUCTS_URL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error); }));
    };
    ProductsService.prototype.getProducts = function (dataTablesParameters) {
        return this.httpClient.get(this.PRODUCTS_URL).toPromise()
            .then(function (data) {
        })
            .catch(function (err) { return Promise.reject(err); });
    };
    ProductsService.prototype.getBrands = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set(_http_request_interceptor__WEBPACK_IMPORTED_MODULE_5__["InterceptorSkipHeader"], '');
        return this.httpClient.get(this.GET_BRAND, { headers: headers }).toPromise()
            .catch(function (err) { return Promise.reject(err); });
    };
    ProductsService.prototype.getTypes = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set(_http_request_interceptor__WEBPACK_IMPORTED_MODULE_5__["InterceptorSkipHeader"], '');
        return this.httpClient.get(this.GET_TYPES, { headers: headers }).toPromise()
            .catch(function (err) { return Promise.reject(err); });
    };
    ProductsService.prototype.getProductCodes = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set(_http_request_interceptor__WEBPACK_IMPORTED_MODULE_5__["InterceptorSkipHeader"], '');
        return this.httpClient.get(this.GET_PRODUCT_CODE, { headers: headers }).toPromise()
            .catch(function (err) { return Promise.reject(err); });
    };
    ProductsService.prototype.getProductDetails = function (productCode) {
        return this.httpClient.get(this.PRODUCTS_URL + '/details/' + productCode).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Promise.reject(err); }));
    };
    ProductsService.prototype.updateProduct = function (data, productCode) {
        data._id = undefined;
        return this.httpClient.patch(this.PRODUCTS_URL + '/' + productCode, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error); }));
    };
    ProductsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/services/session.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/session.service.ts ***!
  \*********************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SessionService = /** @class */ (function () {
    function SessionService() {
        this.tokenKey = 'app_token';
        this.userId = 'user_id';
        this.userName = 'user_name';
        this.cartData = 'cart_data';
        this.userData = 'user_data';
    }
    SessionService.prototype.saveToken = function (token) {
        sessionStorage.setItem(this.tokenKey, token);
    };
    SessionService.prototype.retrieveToken = function () {
        var storedToken = sessionStorage.getItem(this.tokenKey);
        return storedToken;
    };
    SessionService.prototype.saveUserId = function (token) {
        sessionStorage.setItem(this.userId, token);
    };
    SessionService.prototype.retrieveUserId = function () {
        var storedUserId = sessionStorage.getItem(this.userId);
        return storedUserId;
    };
    SessionService.prototype.saveCartData = function (cartData) {
        sessionStorage.setItem(this.cartData, cartData);
    };
    SessionService.prototype.retrieveCartData = function () {
        return sessionStorage.getItem(this.cartData);
    };
    SessionService.prototype.removeCartData = function () {
        sessionStorage.removeItem(this.cartData);
    };
    SessionService.prototype.saveUserData = function (userData) {
        sessionStorage.setItem(this.userData, userData);
    };
    SessionService.prototype.retrieveUserData = function () {
        return sessionStorage.getItem(this.userData);
    };
    SessionService.prototype.retrieveUserCategory = function () {
        if (this.retrieveUserData()) {
            return JSON.parse(this.retrieveUserData()).category;
        }
        return 'Customer';
    };
    SessionService.prototype.destroy = function () {
        sessionStorage.clear();
    };
    SessionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _http_request_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http.request.interceptor */ "./src/app/services/http.request.interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsersService = /** @class */ (function () {
    function UsersService(httpClient) {
        this.httpClient = httpClient;
        this.REGISTER_URL = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + 'auth/register';
        this.VERIFY_EMAIL = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + 'auth/verify';
        this.LOGIN_URL = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + 'auth/login';
        this.USERS_URL = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + 'users';
        this.ADD_ADDRESS_URL = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + 'addresses';
        this.ADDRESSES_URL = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + 'addresses';
        this.SEND_FORGOT_PASSWORD_URL = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + 'auth/forgot';
        this.RESET_PASSWORD_URL = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + 'auth/reset';
        this.RESEND_TOKEN_URL = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + 'auth/resend';
    }
    UsersService.prototype.register = function (data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set(_http_request_interceptor__WEBPACK_IMPORTED_MODULE_5__["InterceptorSkipHeader"], '');
        return this.httpClient.post(this.REGISTER_URL, data, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error); }));
    };
    UsersService.prototype.login = function (data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set(_http_request_interceptor__WEBPACK_IMPORTED_MODULE_5__["InterceptorSkipHeader"], '');
        return this.httpClient.post(this.LOGIN_URL, data, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error); }));
    };
    UsersService.prototype.forgotPassword = function (email) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set(_http_request_interceptor__WEBPACK_IMPORTED_MODULE_5__["InterceptorSkipHeader"], '');
        return this.httpClient.post(this.SEND_FORGOT_PASSWORD_URL, { email: email }, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error); }));
    };
    UsersService.prototype.resetPassword = function (token, model) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('token', token);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set(_http_request_interceptor__WEBPACK_IMPORTED_MODULE_5__["InterceptorSkipHeader"], '');
        return this.httpClient.post(this.RESET_PASSWORD_URL, { password: model.password }, { headers: headers, params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error); }));
    };
    UsersService.prototype.getUserDetails = function (userId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('userId', userId);
        return this.httpClient.get(this.USERS_URL + '/' + userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Promise.reject(err); }));
    };
    UsersService.prototype.updateUser = function (data, userId) {
        return this.httpClient.patch(this.USERS_URL + '/' + userId, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error); }));
    };
    UsersService.prototype.addAddress = function (data) {
        return this.httpClient.post(this.ADD_ADDRESS_URL, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error); }));
    };
    UsersService.prototype.updateAddress = function (data, addressId) {
        return this.httpClient.patch(this.ADDRESSES_URL + '/' + addressId, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error); }));
    };
    UsersService.prototype.getAddresses = function (userId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('userId', userId);
        return this.httpClient.get(this.ADDRESSES_URL, { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Promise.reject(err); }));
    };
    UsersService.prototype.getAddressDetails = function (addressId) {
        return this.httpClient.get(this.ADDRESSES_URL + '/' + addressId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Promise.reject(err); }));
    };
    UsersService.prototype.deleteAddress = function (addressId) {
        return this.httpClient.delete(this.ADDRESSES_URL + '/' + addressId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error); }));
    };
    UsersService.prototype.verifyEmail = function (token) {
        return this.httpClient.get(this.VERIFY_EMAIL + '/' + token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Promise.reject(err); }));
    };
    UsersService.prototype.resendVerificationMail = function (email) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set(_http_request_interceptor__WEBPACK_IMPORTED_MODULE_5__["InterceptorSkipHeader"], '');
        return this.httpClient.post(this.RESEND_TOKEN_URL, { email: email }, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Promise.reject(err); }));
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    // baseUrl: 'https://www.akrosstore.com/api/'
    baseUrl: 'http://www.perfumes2go.net/api/'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3000/api/'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    window.console.log = function () { };
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/osboxes/_rob_work/Perfumes2GoWS/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
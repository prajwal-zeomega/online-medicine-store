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
		var e = new Error("Cannot find module '" + req + "'");
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
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_main_auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main/auth/login/login.component */ "./src/app/components/main/auth/login/login.component.ts");
/* harmony import */ var _components_main_auth_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/main/auth/register/register.component */ "./src/app/components/main/auth/register/register.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");









var routes = [
    { path: "", redirectTo: "/", pathMatch: "full" },
    { path: "", component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"] },
    { path: "dashboard", component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: "login", component: _components_main_auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: "register", component: _components_main_auth_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: "**", component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [
    _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
    _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
    _components_main_auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
    _components_main_auth_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
    _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"]
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/token-interceptor.service */ "./src/app/services/token-interceptor.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_dashboard_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dashboard/sidebar/sidebar.component */ "./src/app/components/dashboard/sidebar/sidebar.component.ts");
/* harmony import */ var _components_main_notification_panel_notification_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/main/notification-panel/notification-panel.component */ "./src/app/components/main/notification-panel/notification-panel.component.ts");
/* harmony import */ var _components_dashboard_products_products_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/dashboard/products/products.component */ "./src/app/components/dashboard/products/products.component.ts");
/* harmony import */ var _components_dashboard_sidebar_cart_cart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/dashboard/sidebar/cart/cart.component */ "./src/app/components/dashboard/sidebar/cart/cart.component.ts");
/* harmony import */ var _components_dashboard_sidebar_admin_form_admin_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/dashboard/sidebar/admin-form/admin-form.component */ "./src/app/components/dashboard/sidebar/admin-form/admin-form.component.ts");
/* harmony import */ var _components_dashboard_sidebar_cart_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/dashboard/sidebar/cart/order-form/order-form.component */ "./src/app/components/dashboard/sidebar/cart/order-form/order-form.component.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var _pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pipes/highlight.pipe */ "./src/app/pipes/highlight.pipe.ts");
/* harmony import */ var _pipes_shorten_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pipes/shorten.pipe */ "./src/app/pipes/shorten.pipe.ts");







// Services


// Guards

// Components








// Pipes



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _components_dashboard_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["SidebarComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["routingComponents"],
                _components_main_notification_panel_notification_panel_component__WEBPACK_IMPORTED_MODULE_13__["NotificationPanelComponent"],
                _components_dashboard_products_products_component__WEBPACK_IMPORTED_MODULE_14__["ProductsComponent"],
                _components_dashboard_sidebar_cart_cart_component__WEBPACK_IMPORTED_MODULE_15__["CartComponent"],
                _components_dashboard_sidebar_cart_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_17__["OrderFormComponent"],
                _components_dashboard_sidebar_admin_form_admin_form_component__WEBPACK_IMPORTED_MODULE_16__["AdminFormComponent"],
                _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_18__["FilterPipe"],
                _pipes_highlight_pipe__WEBPACK_IMPORTED_MODULE_19__["HighlightPipe"],
                _pipes_shorten_pipe__WEBPACK_IMPORTED_MODULE_20__["ShortenPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__["AngularFontAwesomeModule"]
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_8__["TokenInterceptorService"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- spinner -->\n<div *ngIf=\"isLoading\" class=\"spinner-border text-danger\" role=\"status\">\n  <span class=\"sr-only\">Loading...</span>\n</div>\n\n<!-- dashboard -->\n<div class=\"row mt-1\">\n  <div class=\"mr-2 p-1\">\n    <button class=\"btn btn-danger m-2\" (click)=\"isSidenavOpen = !isSidenavOpen\">\n      <fa name=\"shopping-basket\"></fa>\n    </button>\n    <div *ngIf=\"isSidenavOpen\" class=\"col-md card m-2 p-1\">\n      <app-sidebar [user]=\"user\"></app-sidebar>\n    </div>\n  </div>\n  <div class=\"col-md bg-light p-2\"><app-products [user]=\"user\"></app-products></div>\n</div>\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"dashboardModal\" [ngStyle]=\"{ display: display }\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <!-- Modal Header -->\n      <div class=\"modal-header bg-dark text-white text-center\">\n        <h4 class=\"modal-title\" [innerHTML]=\"modalHeader ? modalHeader : 'Success!'\"></h4>\n        <button type=\"button\" (click)=\"onCloseHandled()\" class=\"close\" data-dismiss=\"modal\" routerLink=\"/\">\n          &times;\n        </button>\n      </div>\n      <!-- Modal body -->\n      <div class=\"modal-body\" *ngIf=\"modalBody\" [innerHTML]=\"modalBody\"></div>\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" (click)=\"onCloseHandled()\" class=\"btn btn-danger\" data-dismiss=\"modal\" routerLink=\"/\">\n          Close\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");


// Services

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService) {
        this.authService = authService;
        this.isSidenavOpen = true;
        this.isAuth = false;
        this.user = null;
        // modal & loading
        this.isLoading = true;
        this.display = "none";
        this.modalHeader = "";
        this.modalBody = "";
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // import user data
        this.authService.getCurrentUser().subscribe(function (res) {
            _this.authService.userDetails(res.user);
            _this.authService.userOrdersDetails(res.orders[0]);
            _this.authService.currentUserData.subscribe(function (user) { return ((_this.user = user), (_this.isLoading = false)); }, function (err) { return _this.onError(); });
        }, function (err) { return _this.onError(); });
    };
    // modal
    DashboardComponent.prototype.openModal = function () {
        this.display = "block";
    };
    DashboardComponent.prototype.onCloseHandled = function () {
        this.display = "none";
    };
    DashboardComponent.prototype.onError = function () {
        this.isLoading = false;
        this.modalHeader = "An Error Has Occurred";
        this.modalBody = "Could not load shopping section do to server communication problem. Please try again later.";
        this.openModal();
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-dashboard",
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/products/products.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/dashboard/products/products.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* input[type=\"text\"] {\n  width: 250px;\n  box-sizing: border-box;\n  border: 2px solid #ccc;\n  border-radius: 10px;\n  font-size: 12px;\n  background-color: white;\n  background-image: url(\"/assets/images/search.svg\");\n  background-size: 20px;\n  background-position: 10px 10px;\n  background-repeat: no-repeat;\n  padding: 10px 20px 10px 40px;\n  -webkit-transition: width 0.4s ease-in-out;\n  transition: width 0.4s ease-in-out;\n}\n\ninput[type=\"text\"]:focus {\n  outline: none;\n  border: 2px solid rgb(248, 97, 97);\n  width: 100%;\n} */\n\n#quantity {\n  width: 100px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7O0FBRUg7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICB3aWR0aDogMjUwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL3NlYXJjaC5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMjBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTBweCAxMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCA0MHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNHMgZWFzZS1pbi1vdXQ7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDI0OCwgOTcsIDk3KTtcbiAgd2lkdGg6IDEwMCU7XG59ICovXG5cbiNxdWFudGl0eSB7XG4gIHdpZHRoOiAxMDBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/products/products.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/dashboard/products/products.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- spinner -->\n<div *ngIf=\"isLoading\" class=\"text-center mb-2\">\n  <div class=\"spinner-border text-danger\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n<!-- search bar -->\n<!-- fetching data from the server -->\n<div class=\"input-group mb-2 mx-auto\" style=\"width:60%\">\n  <input type=\"text\" #searchProducts class=\"form-control\" placeholder=\"Search for products...\" />\n  <div class=\"input-group-append\">\n    <button (click)=\"onSearch(searchProducts.value)\" class=\"btn btn-danger\"><fa name=\"search\"></fa></button>\n  </div>\n</div>\n<!-- using pipe -->\n<!-- <input type=\"text\" name=\"search\" class=\"mb-2\" placeholder=\"Search for products...\" [(ngModel)]=\"filteredStatus\" /> -->\n\n<!-- category bar -->\n<div class=\"d-flex flex-wrap justify-content-center p-1 bg-light\">\n  <button\n    *ngFor=\"let category of categories\"\n    (click)=\"onCategorySelected(category.cat_name)\"\n    type=\"button\"\n    class=\"px-2 m-2 btn btn-dark btn-sm\"\n  >\n    {{ category?.cat_name }}\n  </button>\n  <button type=\"button\" (click)=\"onShowAllProducts()\" class=\"px-2 m-2 btn btn-primary btn-sm\">\n    Show All Products\n  </button>\n</div>\n\n<!-- products -->\n<div *ngIf=\"products\" class=\"d-flex flex-wrap justify-content-center border\">\n  <div *ngIf=\"products.length == 0\" class=\"text-center m-4\">\n    <h3>There are no products</h3>\n    <button class=\"btn btn-outline-primary\" (click)=\"onShowAllProducts()\">Go back to full product list</button>\n  </div>\n\n  <div\n    *ngFor=\"let product of (products | filter: filteredStatus:'prod_name')\"\n    class=\"card text-center m-1\"\n    style=\"width:200px\"\n    (click)=\"user?.role ? onProductEdit(product) : null\"\n    [ngStyle]=\"user?.role && { cursor: 'pointer' }\"\n  >\n    <!-- spinner -->\n    <div *ngIf=\"isLoading\" class=\"spinner-border text-danger mx-auto\" role=\"status\">\n      <span class=\"sr-only\">Loading...</span>\n    </div>\n\n    <img [src]=\"product.imageUrl\" [alt]=\"product.prod_name\" style=\"width:100%\" class=\"p-1\" />\n    <small>Price: {{ product.price | currency: \"ILS\":\"symbol\":\"1.2-2\" }}</small>\n    <h6 class=\"card-title text-danger\">{{ product.prod_name }}</h6>\n\n    <!-- Button to Open the Modal -->\n    <button\n      *ngIf=\"!user?.role && !orderStatus\"\n      type=\"button\"\n      class=\"btn btn-danger\"\n      data-toggle=\"modal\"\n      [attr.data-target]=\"'#Modal' + product.id\"\n    >\n      <fa name=\"plus-circle\" class=\"pr-2\"></fa>Add Product\n    </button>\n    <!-- The Modal -->\n    <div class=\"modal\" [id]=\"'Modal' + product?.id\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <!-- Modal Header -->\n          <div class=\"modal-header btn-danger\">\n            <h4 class=\"modal-title\">{{ product.prod_name }}</h4>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <!-- Modal form -->\n          <form>\n            <!-- Modal body -->\n            <div class=\"modal-body d-flex flex-row justify-content-around align-content-center align-items-center\">\n              <div class=\"p-1\" style=\"width:100px\">\n                <img [src]=\"product.imageUrl\" [alt]=\"product.prod_name\" class=\"img-fluid img-thumbnail\" />\n              </div>\n              <div class=\"p-1\">\n                <h6>Price /per unit</h6>\n                {{ product.price | currency: \"ILS\":\"symbol\":\"1.2-2\" }}\n              </div>\n              <div class=\"p-1\">\n                <h6>Quantity</h6>\n                <input\n                  id=\"quantity\"\n                  [(ngModel)]=\"product.quantity\"\n                  name=\"quantity\"\n                  type=\"number\"\n                  placeholder=\"0\"\n                  min=\"0\"\n                  class=\"form-control quantity-input\"\n                />\n              </div>\n              <div class=\"p-1\">\n                <h6>Total Price</h6>\n                {{ product.price * product.quantity | currency: \"ILS\":\"symbol\":\"1.2-2\" }}\n              </div>\n            </div>\n            <!-- Modal footer -->\n            <div class=\"modal-footer\">\n              <button type=\"button\" (click)=\"onAddProductToCart(product)\" class=\"btn btn-warning\" data-dismiss=\"modal\">\n                <fa name=\"cart-plus\" class=\"mr-2\"></fa>Add to Cart\n              </button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"myModal\" [ngStyle]=\"{ display: display }\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <!-- Modal Header -->\n      <div class=\"modal-header bg-dark text-white text-center\">\n        <h4 class=\"modal-title\" [innerHTML]=\"modalHeader ? modalHeader : 'Success!'\"></h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" routerLink=\"/\">\n          &times;\n        </button>\n      </div>\n      <!-- Modal body -->\n      <div class=\"modal-body\" *ngIf=\"modalBody\" [innerHTML]=\"modalBody\"></div>\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" routerLink=\"/\">\n          Close\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/dashboard/products/products.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/dashboard/products/products.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");


// Services



var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productService, orderService, authService) {
        this.productService = productService;
        this.orderService = orderService;
        this.authService = authService;
        this.filteredStatus = "";
        this.orderStatus = false;
        // modal & loading
        this.isLoading = true;
        this.display = "none";
        this.modalHeader = "";
        this.modalBody = "";
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // orders
        this.orderService.currentOrderStatus.subscribe(function (res) { return (_this.orderStatus = res); }, function (err) { return _this.onError(); });
        // products
        this.productService.currentProducts.subscribe(function (products) { return (_this.products = products); }, function (err) { return _this.onError(); });
        // categories
        this.productService.currentCategories.subscribe(function (categories) { return ((_this.categories = categories), (_this.isLoading = false)); }, function (err) { return _this.onError(); });
    };
    ProductsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        // import product data
        this.productService.getAllProducts().subscribe(function (res) {
            return (_this.products = res.products.map(function (product) {
                return {
                    id: product._id,
                    prod_name: product.prod_name,
                    price: product.price,
                    imageUrl: product.imageUrl,
                    category: product.category.cat_name
                };
            }));
        }, function (err) {
            if (!err.status)
                _this.onError();
        });
        // import categories
        this.productService.getAllCategories().subscribe(function (res) {
            return (_this.categories = res.categories.map(function (category) {
                return {
                    id: category._id,
                    cat_name: category.cat_name,
                    products: category.products
                };
            }));
        }, function (err) {
            if (!err.status)
                _this.onError();
        });
    };
    ProductsComponent.prototype.onSearch = function (productName) {
        var _this = this;
        // http request for products by name or partial string, update products display
        this.productService.getProductsByName(productName).subscribe(function (res) {
            _this.isLoading = false;
            _this.productService.displayedProducts(res.products.map(function (product) {
                return {
                    id: product._id,
                    prod_name: product.prod_name,
                    price: product.price,
                    imageUrl: product.imageUrl,
                    category: product.category.cat_name
                };
            }));
        }, function (err) { return (_this.isLoading = false); });
    };
    ProductsComponent.prototype.onCategorySelected = function (categoryName) {
        var _this = this;
        this.isLoading = true;
        // http request for products by category, update products display
        this.productService.getProductsByCategory(categoryName).subscribe(function (res) {
            _this.isLoading = false;
            _this.productService.displayedProducts(res.products.map(function (product) {
                return {
                    id: product._id,
                    prod_name: product.prod_name,
                    price: product.price,
                    imageUrl: product.imageUrl,
                    category: categoryName
                };
            }));
        }, function (err) { return (_this.isLoading = false); });
    };
    ProductsComponent.prototype.onShowAllProducts = function () {
        var _this = this;
        this.isLoading = true;
        this.productService.getAllProducts().subscribe(function (res) {
            _this.isLoading = false;
            _this.productService.displayedProducts(res.products.map(function (product) {
                return {
                    id: product._id,
                    prod_name: product.prod_name,
                    price: product.price,
                    imageUrl: product.imageUrl,
                    category: product.category.cat_name
                };
            }));
        });
    };
    ProductsComponent.prototype.onAddProductToCart = function (product) {
        var _this = this;
        if (product.quantity > 0) {
            this.isLoading = true;
            this.orderService.addProductToCart(this.user, product).subscribe(function (res) {
                _this.isLoading = false;
                _this.authService.userDetails(res.user);
                product.quantity = 0;
            }, function (err) {
                _this.isLoading = false;
                _this.modalHeader = "An Error Has Occurred";
                _this.modalBody = "Could not add product to cart. Please try again later.";
                _this.openModal();
            });
        }
    };
    ProductsComponent.prototype.onProductEdit = function (product) {
        this.productService.chosenProduct(product);
    };
    // modal
    ProductsComponent.prototype.openModal = function () {
        this.display = "block";
    };
    ProductsComponent.prototype.onCloseHandled = function () {
        this.display = "none";
    };
    ProductsComponent.prototype.onError = function () {
        this.isLoading = false;
        this.modalHeader = "An Error Has Occurred";
        this.modalBody = "Could not display products do to server communication problem. Please try again later.";
        this.openModal();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductsComponent.prototype, "user", void 0);
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-products",
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/components/dashboard/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/components/dashboard/products/products.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/sidebar/admin-form/admin-form.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/dashboard/sidebar/admin-form/admin-form.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3NpZGViYXIvYWRtaW4tZm9ybS9hZG1pbi1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/sidebar/admin-form/admin-form.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/dashboard/sidebar/admin-form/admin-form.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"d-flex px-1 mb-1 align-items-center\">\n    <!-- spinner -->\n    <div *ngIf=\"isLoading\" class=\"spinner-border text-danger\" role=\"status\">\n      <span class=\"sr-only\">Loading...</span>\n    </div>\n    <h6 class=\"pl-2 mr-auto\">{{ mode == \"add\" ? \"Create Product\" : \"Edit Product\" }}</h6>\n    <button (click)=\"onAddProduct()\" type=\"button\" class=\"btn btn-dark mr-1\"><fa name=\"plus\"></fa></button>\n    <button (click)=\"onDeleteProduct()\" type=\"button\" class=\"btn btn-danger\"><fa name=\"trash\"></fa></button>\n  </div>\n  <div *ngIf=\"!isHidden\" class=\"p-1\">\n    <!-- product form -->\n    <form #adminForm=\"ngForm\" (ngSubmit)=\"mode == 'add' ? onSaveNewProduct(adminForm) : onUpdateProduct(adminForm)\">\n      <!-- warning -->\n      <div *ngIf=\"isEmpty && !isOK\" class=\"alert alert-danger\">{{ warning }}</div>\n      <div *ngIf=\"isEmpty && isOK\" class=\"alert alert-success\">{{ warning }}</div>\n      <!-- warning -->\n      <!-- product name -->\n      <div class=\"form-group\">\n        <input\n          type=\"text\"\n          name=\"prod_name\"\n          class=\"form-control\"\n          id=\"prod_name\"\n          [(ngModel)]=\"currentProduct.prod_name\"\n          #prod_name=\"ngModel\"\n          placeholder=\"Product Name\"\n        />\n      </div>\n      <!-- image -->\n      <div class=\"form-group\">\n        <h6><small class=\"text-muted\">Please upload only files of type .JPEG, .JPG, or .PNG</small></h6>\n        <input\n          type=\"file\"\n          (change)=\"onFileSelected($event)\"\n          (click)=\"onFileSelected($event)\"\n          style=\"display:none\"\n          #pickedFile\n        />\n        <button type=\"button\" (click)=\"pickedFile.click()\" class=\"btn btn-dark\">\n          <fa name=\"image\" class=\"mr-2\"></fa>Pick File\n        </button>\n        <span class=\"ml-3\">{{ selectedFile?.name | shorten: 15 }}</span>\n      </div>\n      <!-- price -->\n      <div class=\"form-group\">\n        <input\n          type=\"number\"\n          name=\"price\"\n          class=\"form-control\"\n          id=\"price\"\n          [(ngModel)]=\"currentProduct.price\"\n          #price=\"ngModel\"\n          placeholder=\"Price\"\n        />\n      </div>\n      <!-- category -->\n      <div class=\"form-group\">\n        {{ selectedCategory }}\n        <select\n          type=\"text\"\n          name=\"category\"\n          class=\"form-control\"\n          id=\"category\"\n          [(ngModel)]=\"currentProduct.category ? currentProduct.category : initCategory\"\n          #category=\"ngModel\"\n        >\n          <option *ngFor=\"let category of categories\" [value]=\"category?.cat_name\">{{ category?.cat_name }}</option>\n        </select>\n      </div>\n      <!-- submit button -->\n      <button type=\"submit\" class=\"btn btn-danger\">{{ mode == \"add\" ? \"Add Product\" : \"Update Product\" }}</button>\n    </form>\n    <!-- category form -->\n    <div class=\"card bg-light p-3 mt-3\">\n      <form #categoryForm=\"ngForm\" (ngSubmit)=\"onAddCategory(categoryForm)\">\n        <div class=\"form-group\">\n          <strong>Can't find the category you need?</strong><br />Add a new one to the scroll list!\n        </div>\n        <div class=\"form-group\">\n          <input\n            type=\"text\"\n            name=\"category_add\"\n            id=\"category_add\"\n            placeholder=\"New Category\"\n            class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': category_add.errors && category_add.touched }\"\n            ngModel\n            #category_add=\"ngModel\"\n            required\n            minlength=\"2\"\n          />\n          <div [hidden]=\"!category_add.errors?.required\" class=\"invalid-feedback\">Category field is required</div>\n          <div [hidden]=\"!category_add.errors?.minlength\" class=\"invalid-feedback\">\n            Category must be at least 2 characters\n          </div>\n        </div>\n        <!-- submit button -->\n        <button type=\"submit\" class=\"btn btn-warning\">Add Category</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/dashboard/sidebar/admin-form/admin-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/dashboard/sidebar/admin-form/admin-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AdminFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminFormComponent", function() { return AdminFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");


// Services

var AdminFormComponent = /** @class */ (function () {
    function AdminFormComponent(productService) {
        this.productService = productService;
        this.isHidden = true;
        this.isEmpty = false;
        this.isOK = false;
        this.warning = "";
        this.mode = "add";
        this.currentProduct = null;
        this.isFileSelected = false;
        this.selectedFile = null;
        this.initCategory = "Choose Category";
        this.isLoading = true;
    }
    AdminFormComponent.prototype.ngOnChanges = function (changes) {
        this.updateCategories();
        if (this.mode == "add") {
            this.isHidden = false;
            this.onClearForm();
        }
    };
    AdminFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.currentProduct.subscribe(function (product) {
            if (product) {
                _this.currentProduct = product;
                _this.mode = "edit";
                _this.isHidden = false;
                _this.isEmpty = false;
            }
        });
        this.updateCategories();
        if (this.categories !== undefined)
            this.initCategory = this.categories[0].cat_name;
        this.isLoading = false;
    };
    AdminFormComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
        if (this.selectedFile)
            if (this.selectedFile.type !== "image/jpeg" &&
                this.selectedFile.type !== "image/jpg" &&
                this.selectedFile.type !== "image/png") {
                this.isFileSelected = true;
                this.isEmpty = true;
                this.isOK = false;
                this.warning = "File type is invalid";
            }
            else
                this.isEmpty = false;
    };
    AdminFormComponent.prototype.onAddProduct = function () {
        this.isHidden = false;
        this.isOK = false;
        this.onClearForm();
    };
    AdminFormComponent.prototype.onSaveNewProduct = function (form) {
        var _this = this;
        if (this.validateForm(form)) {
            this.isEmpty = false;
            var fd = new FormData();
            fd.append("prod_name", form.controls.prod_name.value);
            fd.append("price", form.controls.price.value);
            fd.append("category", form.controls.category.value);
            fd.append("imageUrl", this.selectedFile, this.selectedFile.name);
            this.isLoading = true;
            this.productService.createProduct(fd).subscribe(function (res) {
                _this.isLoading = false;
                _this.updateProducts();
                _this.onClearForm();
                _this.isOK = true;
                _this.isEmpty = true;
                _this.warning = "Product was successfully created";
            }, function (err) {
                _this.isLoading = false;
                _this.isEmpty = true;
                _this.isOK = false;
                _this.warning = "Could not create new product";
            });
        }
        else {
            this.isOK = false;
            this.isEmpty = true;
        }
    };
    AdminFormComponent.prototype.onUpdateProduct = function (form) {
        var _this = this;
        if (this.validateForm(form)) {
            this.isLoading = true;
            this.isOK = false;
            this.isEmpty = false;
            var fd = new FormData();
            if (this.selectedFile)
                fd.append("imageUrl", this.selectedFile, this.selectedFile.name);
            if (form.controls.price.value > 0)
                fd.append("price", form.controls.price.value);
            if (form.controls.prod_name.value && form.controls.prod_name.value.length > 1)
                fd.append("prod_name", form.controls.prod_name.value);
            if (form.controls.category.value && form.controls.category.value.length > 1)
                fd.append("category", form.controls.category.value);
            this.productService.editProduct(this.currentProduct.id, fd).subscribe(function (res) {
                _this.isLoading = false;
                _this.isEmpty = true;
                _this.isOK = true;
                _this.updateProducts();
                _this.onClearForm();
                _this.warning = "Product was successfully updated";
            }, function (err) {
                _this.isLoading = false;
                _this.isEmpty = true;
                _this.isOK = false;
                _this.warning = "Could not update product";
            });
        }
        else
            this.isEmpty = true;
    };
    AdminFormComponent.prototype.onDeleteProduct = function () {
        var _this = this;
        if (this.mode == "edit" && this.currentProduct) {
            this.isLoading = true;
            this.productService.deleteProduct(this.currentProduct.id).subscribe(function (res) {
                _this.isLoading = false;
                _this.updateProducts();
                _this.isEmpty = true;
                _this.isOK = true;
                _this.warning = "Product was successfully deleted";
            }, function (err) {
                _this.isLoading = false;
                _this.isEmpty = true;
                _this.isOK = false;
                _this.warning = "Could not delete product";
            });
        }
        this.onClearForm();
    };
    AdminFormComponent.prototype.onAddCategory = function (form) {
        var _this = this;
        if (form.valid) {
            this.isLoading = true;
            this.productService.createCategory({ cat_name: form.controls.category_add.value }).subscribe(function (res) {
                _this.isLoading = false;
                _this.updateCategories();
                if (_this.categories !== undefined)
                    _this.initCategory = _this.categories[0].cat_name;
                form.reset();
            }, function (err) {
                _this.isLoading = false;
                _this.isEmpty = true;
                _this.isOK = false;
                _this.warning = "Could not create new category";
            });
        }
    };
    AdminFormComponent.prototype.onClearForm = function () {
        this.mode = "add";
        this.currentProduct = { id: "", prod_name: "", price: null, category: "", imageUrl: "" };
        this.selectedFile = null;
        this.isEmpty = false;
        this.isFileSelected = false;
    };
    AdminFormComponent.prototype.validateForm = function (form) {
        var prod_name = form.controls.prod_name.value, price = form.controls.price.value, category = form.controls.category.value;
        if (this.mode == "add") {
            if (!this.selectedFile) {
                this.warning = "Please upload an image";
                return false;
            }
            if (this.selectedFile.type !== "image/jpeg" &&
                this.selectedFile.type !== "image/jpg" &&
                this.selectedFile.type !== "image/png") {
                this.warning = "File type is invalid";
                return false;
            }
            if (form.pristine) {
                this.warning = "Please fill all required fields";
                return false;
            }
            if (((prod_name && !prod_name.trim()) || (category && !category.trim()) || price) && form.pristine) {
                this.warning = "Please fill all required fields";
                return false;
            }
            if (prod_name.length < 2 || form.controls.prod_name.pristine) {
                this.warning = "Product name must be at least 2 characters";
                return false;
            }
            if (category.length < 2) {
                this.warning = "Category must be at least 2 characters";
                return false;
            }
            if (category == "Choose Category") {
                this.warning = "Choose a category, if there are none create one";
                return false;
            }
            if (price == 0 || form.controls.price.pristine) {
                this.warning = "Product price must be higher then 0";
                return false;
            }
        }
        if (this.mode == "edit") {
            if (this.selectedFile) {
                if (this.selectedFile.type !== "image/jpeg" &&
                    this.selectedFile.type !== "image/jpg" &&
                    this.selectedFile.type !== "image/png") {
                    this.warning = "File type is invalid";
                    return false;
                }
            }
            if (!form.controls.prod_name.pristine && (prod_name && prod_name.trim()) && prod_name.length < 2) {
                this.warning = "Product name must be at least 2 characters";
                return false;
            }
            if (!form.controls.category.pristine && (category && category.trim()) && category.length < 2) {
                this.warning = "Category must be at least 2 characters";
                return false;
            }
            if (!form.controls.price.pristine && price !== null && price <= 0) {
                this.warning = "Product price must be higher then 0";
                return false;
            }
        }
        return true;
    };
    AdminFormComponent.prototype.updateProducts = function () {
        var _this = this;
        this.isLoading = true;
        this.productService.getAllProducts().subscribe(function (res) {
            _this.isLoading = false;
            _this.productService.displayedProducts(res.products.map(function (product) {
                return {
                    id: product._id,
                    prod_name: product.prod_name,
                    price: product.price,
                    imageUrl: product.imageUrl,
                    category: product.category.cat_name
                };
            }));
        });
    };
    AdminFormComponent.prototype.updateCategories = function () {
        var _this = this;
        this.productService.getAllCategories().subscribe(function (res) {
            _this.categories = res.categories.map(function (category) {
                return {
                    id: category._id,
                    cat_name: category.cat_name,
                    products: category.products
                };
            });
            _this.productService.displayedCategories(_this.categories);
            _this.categories.reverse();
        });
    };
    AdminFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-admin-form",
            template: __webpack_require__(/*! ./admin-form.component.html */ "./src/app/components/dashboard/sidebar/admin-form/admin-form.component.html"),
            styles: [__webpack_require__(/*! ./admin-form.component.css */ "./src/app/components/dashboard/sidebar/admin-form/admin-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], AdminFormComponent);
    return AdminFormComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/sidebar/cart/cart.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/dashboard/sidebar/cart/cart.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3NpZGViYXIvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/sidebar/cart/cart.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/dashboard/sidebar/cart/cart.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- resume shopping -->\n<div class=\"text-right p-1\">\n  <button *ngIf=\"user?.cart.items.length > 0 && isOrdered\" (click)=\"onBackToShop()\" class=\"btn btn-danger\">\n    <fa name=\"chevron-circle-left\" class=\"mr-2\"></fa>Back to shop\n  </button>\n</div>\n<!-- spinner -->\n<div *ngIf=\"isLoading\" class=\"spinner-border text-danger\" role=\"status\">\n  <span class=\"sr-only\">Loading...</span>\n</div>\n<!-- search products in receipt -->\n<div class=\"px-1\">\n  <input\n    *ngIf=\"isOrdered\"\n    type=\"text\"\n    name=\"search\"\n    class=\"form-control\"\n    placeholder=\"Search for products on shopping cart\"\n    [(ngModel)]=\"filteredStatus\"\n  />\n</div>\n<!-- alerts -->\n<!-- empty cart -->\n<div class=\"alert alert-warning alert-dismissible\" *ngIf=\"user?.cart.items.length == 0\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n  <strong>Start shopping!</strong>\n  <p>Add items to your cart.</p>\n</div>\n<!-- errors -->\n<div class=\"alert alert-danger alert-dismissible\" *ngIf=\"isError\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>{{ errorBody }}\n</div>\n<!-- delete all products -->\n<div class=\"text-right p-1\">\n  <button\n    *ngIf=\"user?.cart.items.length > 0 && !isOrdered && user?.cart.status !== 'pending'\"\n    (click)=\"onEmptyCart()\"\n    class=\"btn btn-dark\"\n  >\n    <fa name=\"trash\" class=\"mr-2\"></fa>Delete All Products\n  </button>\n</div>\n<!-- items in cart -->\n<div *ngIf=\"user?.cart.status !== 'closed'\" class=\"row p-1\">\n  <div class=\"col\">\n    <ul class=\"list-group\">\n      <li *ngFor=\"let item of user?.cart.items\" class=\"list-group-item bg-light\">\n        <div class=\"d-flex\">\n          <div class=\"mr-auto\"><span [innerHTML]=\"item.prod_name | highlight: filteredStatus\"></span></div>\n          <div>\n            <span class=\"badge badge-dark mr-1\">Quantity: {{ item.quantity }}</span>\n          </div>\n          <div>\n            <span class=\"badge badge-dark mr-1\">Price: {{ item.prod_total | currency: \"ILS\":\"symbol\":\"1.2-2\" }}</span>\n          </div>\n          <div *ngIf=\"!isOrdered && (user?.cart.status == 'open' || user?.cart.status == 'new')\">\n            <button (click)=\"onRemoveProductFromCart(item)\" class=\"btn badge badge-danger text-right\">\n              <fa name=\"times\"></fa>\n            </button>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n<!-- cart total -->\n<div class=\"row p-1\">\n  <div class=\"col\">\n    <span class=\"btn btn-dark disabled\">Total: {{ total | currency: \"ILS\":\"symbol\":\"1.2-2\" }}</span>\n  </div>\n  <!-- order -->\n  <div *ngIf=\"(!isOrdered && user?.cart.status == 'open') || user?.cart.status == 'new'\" class=\"col text-right\">\n    <button (click)=\"onOrder()\" class=\"btn btn-danger\" [disabled]=\"user?.cart.items.length == 0\">Order</button>\n  </div>\n</div>\n<app-order-form *ngIf=\"isOrdered\" [user]=\"user\"></app-order-form>\n"

/***/ }),

/***/ "./src/app/components/dashboard/sidebar/cart/cart.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/dashboard/sidebar/cart/cart.component.ts ***!
  \*********************************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/order.service */ "./src/app/services/order.service.ts");


// Srvices


var CartComponent = /** @class */ (function () {
    function CartComponent(authService, orderService) {
        this.authService = authService;
        this.orderService = orderService;
        this.isOrdered = false;
        this.total = 0;
        this.filteredStatus = "";
        this.isLoading = true;
        this.isError = false;
        this.errorBody = "";
    }
    CartComponent.prototype.ngOnInit = function () {
        if (this.user) {
            if (this.user.cart.status == "pending")
                this.isOrdered = true;
            else if (this.user.cart.status == "new")
                this.isOrdered = false;
            this.orderService.changeOrderStatus(this.isOrdered);
        }
        this.isLoading = false;
        this.isError = false;
    };
    CartComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.user) {
            this.total = 0;
            this.user.cart.items.forEach(function (item) { return (_this.total += item.prod_total); });
            if (this.user.cart.status == "pending")
                this.isOrdered = true;
            else if (this.user.cart.status == "new")
                this.isOrdered = false;
            this.orderService.changeOrderStatus(this.isOrdered);
        }
    };
    CartComponent.prototype.onRemoveProductFromCart = function (product) {
        var _this = this;
        this.isError = false;
        this.isLoading = true;
        this.orderService
            .removeProductFromCart(this.user, product)
            .subscribe(function (res) { return ((_this.isLoading = false), _this.authService.userDetails(res.user)); }, function (err) { return ((_this.errorBody = "Could not remove item from cart"), (_this.isError = true), (_this.isLoading = false)); });
    };
    CartComponent.prototype.onEmptyCart = function () {
        var _this = this;
        this.orderService
            .emptyCart(this.user)
            .subscribe(function (res) { return ((_this.isLoading = false), _this.authService.userDetails(res.user)); }, function (err) { return ((_this.errorBody = "Could not delete cart"), (_this.isError = true), (_this.isLoading = false)); });
    };
    CartComponent.prototype.onBackToShop = function () {
        var _this = this;
        this.isLoading = true;
        this.orderService.revokeOrder(this.user).subscribe(function (res) {
            _this.isLoading = false;
            _this.isOrdered = false;
            _this.orderService.changeOrderStatus(_this.isOrdered);
            _this.authService.userDetails(res.user);
        }, function (err) { return ((_this.errorBody = "Could not resume shopping"), (_this.isError = true), (_this.isLoading = false)); });
    };
    CartComponent.prototype.onOrder = function () {
        var _this = this;
        if (this.total > 0) {
            this.isLoading = true;
            this.orderService.initializeOrder(this.user).subscribe(function (res) { return ((_this.isLoading = false), (_this.isOrdered = true), _this.authService.userDetails(res.user)); }, function (err) {
                _this.isOrdered = false;
                _this.isLoading = false;
                _this.errorBody = "Could not proccess order";
                _this.isError = true;
            });
        }
        else
            this.isOrdered = false;
        this.orderService.changeOrderStatus(this.isOrdered);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CartComponent.prototype, "user", void 0);
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-cart",
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/components/dashboard/sidebar/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/components/dashboard/sidebar/cart/cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/sidebar/cart/order-form/order-form.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/dashboard/sidebar/cart/order-form/order-form.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3NpZGViYXIvY2FydC9vcmRlci1mb3JtL29yZGVyLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/dashboard/sidebar/cart/order-form/order-form.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/dashboard/sidebar/cart/order-form/order-form.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-1 px-1\">\n  <div class=\"card bg-light\">\n    <div class=\"card-header bg-dark text-white\">Order Details</div>\n    <div class=\"card-body\">\n      <!-- spinner -->\n      <div *ngIf=\"isLoading\" class=\"spinner-border text-danger\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n      <!-- form -->\n      <form #orderForm=\"ngForm\" (ngSubmit)=\"onFinalizeOrder(orderForm)\" novalidate>\n        <!-- warning -->\n        <div *ngIf=\"isEmpty\" class=\"alert alert-danger\">{{ warning }}</div>\n        <!-- warning -->\n        <span><fa name=\"calendar\" class=\"mr-2\"></fa>Shipping Details</span>\n        <hr />\n        <!-- city -->\n        <div class=\"form-group\">\n          <label for=\"city\">Select city:</label>\n          <select\n            type=\"text\"\n            name=\"city\"\n            class=\"form-control\"\n            id=\"city\"\n            [(ngModel)]=\"user.city\"\n            #city=\"ngModel\"\n            required\n          >\n            <option *ngFor=\"let city of cities\" [ngValue]=\"city\">{{ city }}</option>\n          </select>\n        </div>\n        <!-- street -->\n        <div class=\"form-group\">\n          <label for=\"street\">Street Address:</label>\n          <input\n            type=\"text\"\n            name=\"street\"\n            class=\"form-control\"\n            id=\"street\"\n            [ngClass]=\"{ 'is-invalid': street.errors && street.touched }\"\n            [(ngModel)]=\"user.street\"\n            #street=\"ngModel\"\n            minlength=\"2\"\n            required\n          />\n          <div [hidden]=\"!street.errors?.required\" class=\"invalid-feedback\">Street is required</div>\n          <div [hidden]=\"!street.errors?.minlength\" class=\"invalid-feedback\">Address must be at least 2 characters</div>\n        </div>\n        <!-- shipping date -->\n        <div class=\"form-group\">\n          <label for=\"ship\">Shipping Date:</label>\n          <input\n            type=\"date\"\n            name=\"ship\"\n            class=\"form-control\"\n            id=\"ship\"\n            [ngClass]=\"{ 'is-invalid': ship.errors && ship.touched }\"\n            [(ngModel)]=\"currentDate\"\n            #ship=\"ngModel\"\n            min=\"getCurrentDate()\"\n            required\n          />\n          <div [hidden]=\"!street.errors?.required\" class=\"invalid-feedback\">Shipping date is required</div>\n        </div>\n        <span><fa name=\"credit-card\" class=\"mr-2\"></fa>Payments</span>\n        <hr />\n        <!-- credit card -->\n        <div class=\"form-group\">\n          <label for=\"credit\">Credit Card:</label>\n          <input\n            type=\"text\"\n            name=\"credit\"\n            class=\"form-control\"\n            id=\"credit\"\n            [ngClass]=\"{ 'is-invalid': credit.errors && credit.touched }\"\n            ngModel\n            #credit=\"ngModel\"\n            placeholder=\"Enter credit card number\"\n            minlength=\"16\"\n            maxlength=\"16\"\n            pattern=\"^[0-9]+$\"\n            required\n          />\n          <div [hidden]=\"!credit.errors?.required\" class=\"invalid-feedback\">Credit card number is required</div>\n          <div [hidden]=\"!credit.errors?.pattern\" class=\"invalid-feedback\">Credit card number is invalid</div>\n          <div [hidden]=\"!credit.errors?.minlength\" class=\"invalid-feedback\">\n            Credit card number must contain 16 digits\n          </div>\n        </div>\n        <!-- submit -->\n        <button type=\"submit\" class=\"btn btn-dark\"><fa name=\"check-circle\" class=\"mr-2\"></fa>Confirm & Pay</button>\n      </form>\n    </div>\n  </div>\n</div>\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"myModal\" [ngStyle]=\"{ display: display }\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <!-- Modal Header -->\n      <div class=\"modal-header bg-dark text-white text-center\">\n        <h4 class=\"modal-title\" [innerHTML]=\"modalHeader ? modalHeader : 'Order has been processed successfully!'\"></h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" routerLink=\"/\">\n          &times;\n        </button>\n      </div>\n      <!-- Modal body -->\n      <div class=\"modal-body\" *ngIf=\"!modalBody\">\n        <div class=\"text-center mx-auto\">\n          <!-- spinner -->\n          <div *ngIf=\"isLoading\" class=\"spinner-border text-danger\" role=\"status\">\n            <span class=\"sr-only\">Loading...</span>\n          </div>\n        </div>\n        Click <button class=\"btn btn-danger\" (click)=\"download()\" routerLink=\"/\">here</button> to download receipt\n      </div>\n      <div class=\"modal-body\" *ngIf=\"modalBody\" [innerHTML]=\"modalBody\"></div>\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" routerLink=\"/\">\n          Close\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/dashboard/sidebar/cart/order-form/order-form.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/dashboard/sidebar/cart/order-form/order-form.component.ts ***!
  \**************************************************************************************/
/*! exports provided: OrderFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderFormComponent", function() { return OrderFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



// Services


var OrderFormComponent = /** @class */ (function () {
    function OrderFormComponent(orderService, authService) {
        this.orderService = orderService;
        this.authService = authService;
        this.count = 0;
        this.last = "";
        this.currentDate = "";
        this.cities = [
            "Mandya",
            "Mysore",
            "Hassan",
            "Tumkur",
            "Bangalore",
            "Ramanagar",
            "Bidar",
            "Belgum",
            "Hubli"
        ];
        this.isEmpty = false;
        this.warning = "";
        // modal & loading
        this.isLoading = true;
        this.display = "none";
        this.modalHeader = "";
        this.modalBody = "";
        // shipping date validation
        this.checkShipDate = function (ship) {
            var shipDate = new Date(ship).getTime(), orderDate = new Date(Date.now()).getTime();
            if (ship.match(/^[0-9]{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])/) &&
                (shipDate >= orderDate || ship === new Date().toISOString().split("T")[0]))
                return true;
            else
                return false;
        };
        this.getCurrentDate = function (date) {
            var today = new Date(date), current = today.getFullYear().toString();
            if (today.getMonth() + 1 < 10)
                current += "-0" + (today.getMonth() + 1);
            else
                current += "-" + (today.getMonth() + 1);
            if (today.getDate() < 10)
                current += "-0" + today.getDate();
            else
                current += "-" + today.getDate();
            return current;
        };
        this.adjustDate = function (date) {
            var correct = date.slice(-2) + "/" + date.slice(5, -3) + "/" + date.slice(0, 4);
            return correct;
        };
        // credit card validation
        this.checkCreditCard = (function (credit) {
            return function (ccNum) {
                var len = ccNum.length, bit = 1, sum = 0, val;
                while (len) {
                    val = parseInt(ccNum.charAt(--len), 10);
                    sum += (bit ^= 1) ? credit[val] : val;
                }
                return sum && sum % 10 === 0;
            };
        })([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]);
    }
    OrderFormComponent.prototype.ngOnInit = function () {
        this.currentDate = this.getCurrentDate(new Date());
        this.isLoading = false;
    };
    OrderFormComponent.prototype.onFinalizeOrder = function (form) {
        var _this = this;
        this.isEmpty = false;
        if (!form.valid ||
            !this.checkCreditCard(form.controls.credit.value) ||
            !this.checkShipDate(form.controls.ship.value)) {
            this.isEmpty = true;
            this.warning = "Please fill all required fields";
            if (!this.checkCreditCard(form.controls.credit.value) && form.valid)
                this.warning = "Credit cart number is invalid";
            if (!this.checkShipDate(form.controls.ship.value) && form.valid)
                this.warning = "Shipping date is invalid, must be current date or follow it";
            this.display = "none";
        }
        else {
            this.isLoading = true;
            this.orderService.getAllOrders().subscribe(function (res) {
                _this.isLoading = false;
                // Booking validation
                var ship = form.controls.ship.value, takenDates = [], isTaken = false, orders = res.orders;
                if (orders) {
                    var dates_1 = orders.map(function (order) { return order.user.ship.toString().split("T")[0]; });
                    var allShipDates = dates_1.reduce(function (a, b) {
                        if (a.indexOf(b) < 0)
                            a.push(b);
                        return a;
                    }, []);
                    takenDates = allShipDates.filter(function (shipDate) { return dates_1.filter(function (date) { return date == shipDate; }).length > 2; });
                    if (takenDates.length > 0)
                        isTaken = takenDates.filter(function (date) { return date === ship; }).length > 0;
                    if (isTaken) {
                        _this.warning = "Shipping on " + _this.adjustDate(ship) + " is already booked for 3 orders, pick another date";
                        _this.isEmpty = true;
                        _this.display = "none";
                    }
                    else
                        _this.orderService
                            .addOrder(_this.user, {
                            city: form.controls.city.value,
                            street: form.controls.street.value,
                            ship: form.controls.ship.value,
                            credit: form.controls.credit.value
                        })
                            .subscribe(function (res) {
                            _this.authService.userDetails(res.user);
                            _this.authService.currentUserData.subscribe(function (user) { return ((_this.user = user), form.reset(), _this.openModal()); }, function (err) { return _this.onError(); });
                        }, function (err) { return _this.onError(); });
                }
            }, function (err) { return _this.onError(); });
        }
    };
    // download pdf receipt
    OrderFormComponent.prototype.download = function () {
        var _this = this;
        this.isLoading = true;
        this.authService.currentUserOrdersData.subscribe(function (order) {
            _this.isLoading = false;
            _this.count++;
            if (order && _this.count == 2 && _this.last !== order._id) {
                _this.last = order._id;
                var orderDates = "Order date: " + _this.adjustDate(_this.getCurrentDate(order.user.order)) + "\tShipping date: " + _this.adjustDate(_this.getCurrentDate(order.user.ship)), shipAddress = "Shipping address: " + order.user.street + ", " + order.user.city, userInfo = "[ ID: " + _this.user.cardId + " ] " + _this.user.fname + " " + _this.user.lname, itemsTXT_1 = "";
                order.products.forEach(function (item) {
                    return (itemsTXT_1 += item.prod_name + "\tx " + item.quantity + " units\ttotal:  " + item.prod_total.toFixed(2) + " ILS\n\n");
                });
                var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__();
                doc.setFontSize(22);
                doc.setFontStyle("bold");
                doc.text("Thank you for shopping at ngMarket", 20, 20);
                doc.setLineWidth(0.5);
                doc.line(0, 25, 500, 25);
                doc.setFontSize(12);
                doc.setFontStyle("normal");
                doc.text("Order: " + order._id, 10, 35);
                doc.text(orderDates, 10, 45);
                doc.text(shipAddress, 10, 55);
                doc.text("Customer details: " + userInfo, 10, 65);
                doc.text("Credit card: ****-****-****-" + order.user.credit.slice(-4), 10, 75);
                doc.line(0, 80, 500, 80);
                doc.setFontStyle("bold");
                doc.text("Total price: " + order.total.toFixed(2) + " ILS", 10, 90);
                doc.line(0, 95, 500, 95);
                doc.setFontStyle("normal");
                doc.text(itemsTXT_1, 10, 105);
                doc.save("receipt-" + _this.user.fname + "-" + _this.user.lname + "-" + order._id + ".pdf");
            }
        }, function (err) { return _this.onError(); });
    };
    // modal
    OrderFormComponent.prototype.openModal = function () {
        this.display = "block";
    };
    OrderFormComponent.prototype.onCloseHandled = function () {
        this.display = "none";
    };
    OrderFormComponent.prototype.onError = function () {
        this.modalHeader = "An Error Has Occurred";
        this.modalBody = "Could not proccess your order do to server communication problem. Please try again later.";
        this.openModal();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OrderFormComponent.prototype, "user", void 0);
    OrderFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-order-form",
            template: __webpack_require__(/*! ./order-form.component.html */ "./src/app/components/dashboard/sidebar/cart/order-form/order-form.component.html"),
            styles: [__webpack_require__(/*! ./order-form.component.css */ "./src/app/components/dashboard/sidebar/cart/order-form/order-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], OrderFormComponent);
    return OrderFormComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/sidebar/sidebar.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/dashboard/sidebar/sidebar.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/sidebar/sidebar.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/dashboard/sidebar/sidebar.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <!-- spinner -->\n  <div *ngIf=\"isLoading\" class=\"spinner-border text-danger\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n  <!-- User section -->\n  <h5 *ngIf=\"user\" class=\"text-center text-danger mt-2\">\n    {{ !user?.role ? \"My Shopping Cart\" : \"Administrator Panel\" }}\n    <hr />\n  </h5>\n  <app-cart *ngIf=\"!user?.role\" [user]=\"user\"></app-cart>\n  <!-- Admin section -->\n  <app-admin-form *ngIf=\"user?.role\"></app-admin-form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/dashboard/sidebar/sidebar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/dashboard/sidebar/sidebar.component.ts ***!
  \*******************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.isLoading = true;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.isLoading = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidebarComponent.prototype, "user", void 0);
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sidebar",
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/dashboard/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/dashboard/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/main/auth/login/login.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/main/auth/login/login.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/main/auth/login/login.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/main/auth/login/login.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container card bg-light p-2 my-2\">\n  <!-- spinner -->\n  <div *ngIf=\"isLoading\" class=\"spinner-border text-danger\" role=\"status\"><span class=\"sr-only\">Loading...</span></div>\n  <!-- form -->\n  <form #loginForm=\"ngForm\" (ngSubmit)=\"onLoginUser(loginForm)\" *ngIf=\"!isLoading\" novalidate>\n    <p>Login</p>\n    <div *ngIf=\"isEmpty\" class=\"alert alert-danger alert-dismissible fade show\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>{{ warning }}\n    </div>\n    <!-- email -->\n    <div class=\"form-group\">\n      <input\n        type=\"email\"\n        name=\"email\"\n        [ngClass]=\"{ 'is-invalid': emailInput.errors && emailInput.touched }\"\n        class=\"form-control\"\n        placeholder=\"E-Mail\"\n        ngModel\n        #emailInput=\"ngModel\"\n        required\n        pattern=\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\"\n      />\n      <div [hidden]=\"!emailInput.errors?.required\" class=\"invalid-feedback\">Email is required</div>\n      <div [hidden]=\"!emailInput.errors?.pattern\" class=\"invalid-feedback\">Email is not valid</div>\n    </div>\n    <!-- password -->\n    <div class=\"form-group\">\n      <input\n        type=\"password\"\n        name=\"password\"\n        [ngClass]=\"{ 'is-invalid': passwordInput.errors && passwordInput.touched }\"\n        class=\"form-control\"\n        placeholder=\"Password\"\n        ngModel\n        #passwordInput=\"ngModel\"\n        required\n        minlength=\"4\"\n      />\n      <div [hidden]=\"!passwordInput.errors?.required\" class=\"invalid-feedback\">Password is required</div>\n      <div [hidden]=\"!passwordInput.errors?.minlength\" class=\"invalid-feedback\">\n        Password must be at least 4 characters\n      </div>\n    </div>\n    <!-- submit -->\n    <button type=\"submit\" class=\"btn btn-danger\">Login</button>\n  </form>\n</div>\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"loginModal\" [ngStyle]=\"{ display: display }\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <!-- Modal Header -->\n      <div class=\"modal-header bg-dark text-white text-center\">\n        <h4 class=\"modal-title\" [innerHTML]=\"modalHeader ? modalHeader : 'Success!'\"></h4>\n        <button type=\"button\" (click)=\"onCloseHandled()\" class=\"close\" data-dismiss=\"modal\" routerLink=\"/\">\n          &times;\n        </button>\n      </div>\n      <!-- Modal body -->\n      <div class=\"modal-body\" *ngIf=\"modalBody\" [innerHTML]=\"modalBody\"></div>\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" (click)=\"onCloseHandled()\" class=\"btn btn-danger\" data-dismiss=\"modal\" routerLink=\"/\">\n          Close\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/main/auth/login/login.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/main/auth/login/login.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



// Services

var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isEmpty = false;
        this.isAuth = false;
        this.warning = "";
        // modal & loading
        this.isLoading = true;
        this.display = "none";
        this.modalHeader = "";
        this.modalBody = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.currentAuthStatus.subscribe(function (auth) { return (_this.isAuth = auth); });
        this.isLoading = false;
    };
    LoginComponent.prototype.onLoginUser = function (form) {
        var _this = this;
        if (!form.valid) {
            this.isEmpty = true;
            this.warning = "Please fill all required fields";
        }
        else {
            this.isLoading = true;
            var userLoginData = { email: form.controls.email.value, password: form.controls.password.value };
            this.isEmpty = false;
            this.authService.changeAuthStatus(true);
            this.authService.loginUser(userLoginData).subscribe(function (res) {
                _this.isLoading = false;
                localStorage.setItem("token", res.token);
                _this.authService.getCurrentUser().subscribe(function (res) { return _this.authService.userDetails(res.user); });
                _this.authService.userOrdersDetails(res.orders);
                if (res.user.role === 0)
                    _this.router.navigate(["/"]);
                if (res.user.role === 1)
                    _this.router.navigate(["/dashboard"]);
            }, function (err) {
                _this.isLoading = false;
                if (err.status) {
                    _this.warning = "Could not login user. Please make sure e-mail and password";
                    _this.isEmpty = true;
                }
                else
                    _this.onError();
            });
            form.reset();
        }
    };
    // modal
    LoginComponent.prototype.openModal = function () {
        this.display = "block";
    };
    LoginComponent.prototype.onCloseHandled = function () {
        this.display = "none";
    };
    LoginComponent.prototype.onError = function () {
        this.modalHeader = "An Error Has Occurred";
        this.modalBody = "Could not login user do to server communication problem. Please try again later.";
        this.openModal();
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/main/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/main/auth/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/main/auth/register/register.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/main/auth/register/register.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/main/auth/register/register.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/main/auth/register/register.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container card bg-light p-2 my-2\">\n  <!-- spinner -->\n  <div *ngIf=\"isLoading\" class=\"spinner-border text-danger\" role=\"status\"><span class=\"sr-only\">Loading...</span></div>\n  <!-- alert -->\n  <div *ngIf=\"isEmpty\" class=\"alert alert-danger\">{{ warning }}</div>\n  <!-- form 1 -->\n  <form #registerForm1=\"ngForm\" (ngSubmit)=\"onStageOneComplete(registerForm1)\" *ngIf=\"!Register1\" novalidate>\n    <p>Register</p>\n    <!-- email / username -->\n    <div class=\"form-group\">\n      <input\n        type=\"email\"\n        name=\"email\"\n        class=\"form-control\"\n        placeholder=\"E-Mail\"\n        [ngClass]=\"{ 'is-invalid': email.errors && email.touched }\"\n        ngModel\n        #email=\"ngModel\"\n        required\n        pattern=\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\"\n      />\n      <div [hidden]=\"!email.errors?.required\" class=\"invalid-feedback\">Email is required</div>\n      <div [hidden]=\"!email.errors?.pattern\" class=\"invalid-feedback\">Email is not valid</div>\n    </div>\n    <!-- password -->\n    <div class=\"form-group\">\n      <input\n        type=\"password\"\n        name=\"password\"\n        class=\"form-control\"\n        placeholder=\"Password\"\n        [ngClass]=\"{ 'is-invalid': password.errors && password.touched }\"\n        ngModel\n        #password=\"ngModel\"\n        required\n        minlength=\"4\"\n      />\n      <div [hidden]=\"!password.errors?.required\" class=\"invalid-feedback\">Password is required</div>\n      <div [hidden]=\"!password.errors?.minlength\" class=\"invalid-feedback\">\n        Password must be at least 4 characters\n      </div>\n    </div>\n    <!-- password confirmation -->\n    <div class=\"form-group\">\n      <input\n        type=\"password\"\n        name=\"password2\"\n        class=\"form-control\"\n        placeholder=\"Confirm Password\"\n        [ngClass]=\"{ 'is-invalid': password2.errors && password2.touched }\"\n        ngModel\n        #password2=\"ngModel\"\n        required\n        minlength=\"4\"\n      />\n      <div [hidden]=\"!password2.errors?.required\" class=\"invalid-feedback\">Password confirmation is required</div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-danger\">Next<fa name=\"arrow-right\" class=\"ml-2\"></fa></button>\n  </form>\n  <!-- form 2 -->\n  <form #registerForm2=\"ngForm\" (ngSubmit)=\"onRegisterUser(registerForm2)\" *ngIf=\"Register1\" novalidate>\n    <p>Continue Registration</p>\n    <!-- ID number -->\n    <div class=\"form-group\">\n      <input\n        type=\"text\"\n        name=\"cardId\"\n        class=\"form-control\"\n        placeholder=\"ID Number\"\n        [ngClass]=\"{ 'is-invalid': cardId.errors && cardId.touched }\"\n        ngModel\n        #cardId=\"ngModel\"\n        required\n        minlength=\"9\"\n        maxlength=\"9\"\n        pattern=\"^[0-9]+$\"\n      />\n      <div [hidden]=\"!cardId.errors?.required\" class=\"invalid-feedback\">ID number is required</div>\n      <div [hidden]=\"!cardId.errors?.minlength\" class=\"invalid-feedback\">\n        ID number must contain 9 digits\n      </div>\n      <div [hidden]=\"!cardId.errors?.pattern\" class=\"invalid-feedback\">ID number is invalid</div>\n    </div>\n    <!-- first name -->\n    <div class=\"form-group\">\n      <input\n        type=\"text\"\n        name=\"fname\"\n        class=\"form-control\"\n        placeholder=\"First Name\"\n        [ngClass]=\"{ 'is-invalid': fname.errors && fname.touched }\"\n        ngModel\n        #fname=\"ngModel\"\n        required\n        minlength=\"2\"\n      />\n      <div [hidden]=\"!fname.errors?.required\" class=\"invalid-feedback\">First name is required</div>\n      <div [hidden]=\"!fname.errors?.minlength\" class=\"invalid-feedback\">\n        First name must be at least 2 characters\n      </div>\n    </div>\n    <!-- last name -->\n    <div class=\"form-group\">\n      <input\n        type=\"text\"\n        name=\"lname\"\n        class=\"form-control\"\n        placeholder=\"Last Name\"\n        [ngClass]=\"{ 'is-invalid': lname.errors && lname.touched }\"\n        ngModel\n        #lname=\"ngModel\"\n        required\n        minlength=\"2\"\n      />\n      <div [hidden]=\"!lname.errors?.required\" class=\"invalid-feedback\">Last name is required</div>\n      <div [hidden]=\"!lname.errors?.minlength\" class=\"invalid-feedback\">\n        Last name must be at least 2 characters\n      </div>\n    </div>\n    <!-- city -->\n    <div class=\"form-group\">\n      <label for=\"city\">Select city:</label>\n      <select type=\"text\" name=\"city\" class=\"form-control\" id=\"city\" ngModel #city=\"ngModel\" required>\n        <option *ngFor=\"let city of cities\" [ngValue]=\"city\">{{ city }}</option>\n      </select>\n    </div>\n    <!-- street -->\n    <div class=\"form-group\">\n      <input\n        type=\"text\"\n        name=\"street\"\n        class=\"form-control\"\n        placeholder=\"Street Address\"\n        [ngClass]=\"{ 'is-invalid': street.errors && street.touched }\"\n        ngModel\n        #street=\"ngModel\"\n        required\n        minlength=\"2\"\n      />\n      <div [hidden]=\"!street.errors?.required\" class=\"invalid-feedback\">Street is required</div>\n      <div [hidden]=\"!street.errors?.minlength\" class=\"invalid-feedback\">\n        Street must be at least 2 characters\n      </div>\n    </div>\n    <!-- submit -->\n    <button type=\"submit\" class=\"btn btn-danger\">Register</button>\n  </form>\n</div>\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"registerModal\" [ngStyle]=\"{ display: display }\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <!-- Modal Header -->\n        <div class=\"modal-header bg-dark text-white text-center\">\n          <h4 class=\"modal-title\" [innerHTML]=\"modalHeader ? modalHeader : 'Success!'\"></h4>\n          <button type=\"button\" (click)=\"onCloseHandled()\" class=\"close\" data-dismiss=\"modal\" routerLink=\"/\">\n            &times;\n          </button>\n        </div>\n        <!-- Modal body -->\n        <div class=\"modal-body\" *ngIf=\"modalBody\" [innerHTML]=\"modalBody\"></div>\n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" (click)=\"onCloseHandled()\" class=\"btn btn-danger\" data-dismiss=\"modal\" routerLink=\"/\">\n            Close\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/components/main/auth/register/register.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/main/auth/register/register.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



// Services

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isAuth = false;
        this.isEmpty = false;
        this.warning = "";
        this.Register1 = false;
        this.cityHasError = false;
        this.cities = [
            "Mandya",
            "Mysore",
            "Hassan",
            "Tumkur",
            "Bangalore",
            "Ramanagar",
            "Bidar",
            "Belgum",
            "Hubli"
        ];
        this.userRegisterData = {
            email: "",
            password: "",
            password2: "",
            cardId: "",
            fname: "",
            lname: "",
            city: "",
            street: ""
        };
        // modal & loading
        this.isLoading = true;
        this.display = "none";
        this.modalHeader = "";
        this.modalBody = "";
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = false;
        this.authService.currentAuthStatus.subscribe(function (auth) { return (_this.isAuth = auth); });
    };
    RegisterComponent.prototype.onStageOneComplete = function (form1) {
        if (!form1.valid) {
            this.isEmpty = true;
            this.warning = "Please fill all required fields";
        }
        if (form1.controls.password.value !== form1.controls.password2.value &&
            form1.controls.password &&
            form1.controls.password2) {
            this.isEmpty = true;
            this.warning = "Passwords do not match";
        }
        if (form1.controls.password.value == form1.controls.password2.value && form1.valid) {
            this.isEmpty = false;
            this.Register1 = true;
            this.userRegisterData = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.userRegisterData, { email: form1.controls.email.value, password: form1.controls.password.value, password2: form1.controls.password2.value });
        }
    };
    RegisterComponent.prototype.validateCity = function (value) {
        if (value === "default")
            this.cityHasError = true;
        else
            this.cityHasError = false;
    };
    RegisterComponent.prototype.onRegisterUser = function (form2) {
        var _this = this;
        if (!form2.valid) {
            this.isEmpty = true;
            if (form2.controls.city.value == "")
                this.warning = "City field is required";
            else
                this.warning = "Please fill all required fields";
        }
        else {
            this.isLoading = true;
            this.isEmpty = false;
            this.userRegisterData = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.userRegisterData, { cardId: form2.controls.cardId.value, fname: form2.controls.fname.value, lname: form2.controls.lname.value, city: form2.controls.city.value, street: form2.controls.street.value });
            this.authService.registerUser(this.userRegisterData).subscribe(function (user) {
                _this.isLoading = false;
                _this.isEmpty = false;
                _this.router.navigate(["/login"]);
            }, function (err) {
                _this.isLoading = false;
                if (err.status) {
                    _this.isEmpty = true;
                    _this.warning = "Could not register user";
                    _this.router.navigate(["/register"]);
                }
                else
                    _this.onError();
            });
        }
    };
    // modal
    RegisterComponent.prototype.openModal = function () {
        this.display = "block";
    };
    RegisterComponent.prototype.onCloseHandled = function () {
        this.display = "none";
    };
    RegisterComponent.prototype.onError = function () {
        this.modalHeader = "An Error Has Occurred";
        this.modalBody = "Could not register user do to server communication problem. Please try again later.";
        this.openModal();
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/main/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/main/auth/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/main/main.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/main/main.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/main/main.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div *ngIf=\"!authService.loggedIn()\" class=\"col-md\" >\n    <app-login></app-login>\n    <app-register></app-register>\n  </div>\n  <div class=\"col-md border bg-light\" style=\"background-color: turquoise;\">\n    <h1 class=\"text-danger text-center m-3\"><fa name=\" \" class=\"pr-2\"></fa>Online medical store</h1>\n    <p class=\"m-4\">\n      Online Medical Store It is a Online Pharmacy, ayurvedic store,Health Store \n       Its a one stop shop that offers effective Medical products, healthcare solutions to all those\n        individuals who are health enthusiasts\n    </p>\n    <p class=\"text-center\">\n      <img\n        src=\"./assets/images/medical.jpg\"\n        class=\"img-fluid rounded border border-danger p-1\"\n        alt=\"Products Info\"\n      />\n    </p>\n  </div>\n  <div class=\"col-md bg-dark p-4\">\n    <p class=\"mx-4\"><img src=\"./assets/images/medical2.jpg\" class=\"img-fluid rounded\" alt=\"Products Info\" /></p>\n    <!-- spinner -->\n    <div *ngIf=\"isLoading\" class=\"spinner-border text-danger\" role=\"status\">\n      <span class=\"sr-only\">Loading...</span>\n    </div>\n    <div class=\"text-center text-white border rounded p-1 mx-5 my-4\">\n      <span\n        ><strong>{{ productsTotal }}</strong></span\n      >\n      products are now available in our store!<br />\n      <span\n        ><strong>{{ ordersTotal }}</strong></span\n      >\n      orders has been purchased on our site\n    </div>\n\n    <div *ngIf=\"user\" class=\"text-center bg-warning border rounded p-1 mx-5\">\n      <app-notification-panel [user]=\"user\"></app-notification-panel>\n    </div>\n  </div>\n</div>\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"mainModal\" [ngStyle]=\"{ display: display }\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <!-- Modal Header -->\n      <div class=\"modal-header bg-dark text-white text-center\">\n        <h4 class=\"modal-title\" [innerHTML]=\"modalHeader ? modalHeader : 'Success!'\"></h4>\n        <button type=\"button\" (click)=\"onCloseHandled()\" class=\"close\" data-dismiss=\"modal\" routerLink=\"/\">\n          &times;\n        </button>\n      </div>\n      <!-- Modal body -->\n      <div class=\"modal-body\" *ngIf=\"modalBody\" [innerHTML]=\"modalBody\"></div>\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" (click)=\"onCloseHandled()\" class=\"btn btn-danger\" data-dismiss=\"modal\" routerLink=\"/\">\n          Close\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");


// Services


var MainComponent = /** @class */ (function () {
    function MainComponent(authService, productService) {
        this.authService = authService;
        this.productService = productService;
        this.isAuth = false;
        this.user = null;
        this.userOrders = null;
        this.productsTotal = 0;
        this.ordersTotal = 0;
        // modal & loading
        this.isLoading = true;
        this.display = "none";
        this.modalHeader = "";
        this.modalBody = "";
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        // import shop inventory
        this.productService.getShopInventory().subscribe(function (res) {
            _this.ordersTotal = res.ordersTotal;
            _this.productsTotal = res.productsTotal;
            _this.isLoading = false;
            // import user data
            _this.authService.getCurrentUser().subscribe(function (res) {
                _this.authService.userDetails(res.user);
                _this.authService.userOrdersDetails(res.orders[0]);
                _this.authService.currentUserData.subscribe(function (user) {
                    _this.user = user;
                    _this.authService.currentUserOrdersData.subscribe(function (orders) { return (_this.userOrders = orders); }, function (err) { return _this.onError(); });
                }, function (err) { return _this.onError(); });
            });
        }, function (err) { return _this.onError(); });
    };
    // modal
    MainComponent.prototype.openModal = function () {
        this.display = "block";
    };
    MainComponent.prototype.onCloseHandled = function () {
        this.display = "none";
    };
    MainComponent.prototype.onError = function () {
        this.isLoading = false;
        this.modalHeader = "An Error Has Occurred";
        this.modalBody = "Could not load ngMarket orders & product information do to server communication problem. Please try again later.";
        this.openModal();
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-main",
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/components/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/components/main/notification-panel/notification-panel.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/main/notification-panel/notification-panel.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9ub3RpZmljYXRpb24tcGFuZWwvbm90aWZpY2F0aW9uLXBhbmVsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/main/notification-panel/notification-panel.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/main/notification-panel/notification-panel.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- spinner -->\n<div *ngIf=\"isLoading\" class=\"spinner-border text-danger\" role=\"status\"><span class=\"sr-only\">Loading...</span></div>\n<!-- regular user -->\n<div *ngIf=\"!user?.role\">\n  <div *ngIf=\"user?.cart.status == 'new'\">\n    <h5>Hello {{ user?.fname }}!</h5>\n    <p>Ready to begin your first purchase?</p>\n  </div>\n  <div *ngIf=\"user?.cart.status !== 'new'\">\n    <h5>Welcome Back {{ user?.fname }}!</h5>\n    <!-- pending cart -->\n    <div *ngIf=\"user?.cart.status == 'open' || user?.cart.status == 'pending'\">\n      <p>\n        You have an open cart from <strong>{{ user?.cart.created | date: \"medium\" }}</strong>\n      </p>\n      <p>for total amount of {{ total | currency: \"ILS\":\"symbol\":\"1.2-2\" }}</p>\n    </div>\n    <!-- closed cart -->\n    <p *ngIf=\"user?.cart.status == 'closed'\">\n      Your last purchase was on <strong>{{ orders?.user.order | date: \"medium\" }}</strong>\n    </p>\n  </div>\n  <button class=\"btn btn-danger mb-2\" routerLink=\"/dashboard\">Start Shopping</button>\n  <!-- view last purchase -->\n  <div *ngIf=\"user?.cart.status == 'closed'\" class=\"mt-1\">\n    <button type=\"button\" class=\"btn btn-dark btn-block\" data-toggle=\"collapse\" data-target=\"#demo\">\n      View Last Purchase\n    </button>\n    <div id=\"demo\" class=\"collapse p-1\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>Product</th>\n            <th>Quantity</th>\n            <th>Total</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let product of orders?.products\">\n            <td>{{ product?.prod_name }}</td>\n            <td>{{ product?.quantity }}</td>\n            <td>{{ product?.prod_total | currency: \"ILS\":\"symbol\":\"1.2-2\" }}</td>\n          </tr>\n        </tbody>\n      </table>\n      <strong>For total amount of: {{ orders?.total | currency: \"ILS\":\"symbol\":\"1.2-2\" }}</strong>\n    </div>\n  </div>\n</div>\n\n<!-- admin -->\n<div *ngIf=\"user?.role\">\n  <h5>Hello Administrator</h5>\n  <button class=\"btn btn-danger mb-2\" routerLink=\"/dashboard\">Back to Administrator Panel</button>\n</div>\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"notificationPanelModal\" [ngStyle]=\"{ display: display }\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <!-- Modal Header -->\n      <div class=\"modal-header bg-dark text-white text-center\">\n        <h4 class=\"modal-title\" [innerHTML]=\"modalHeader ? modalHeader : 'Success!'\"></h4>\n        <button type=\"button\" (click)=\"onCloseHandled()\" class=\"close\" data-dismiss=\"modal\" routerLink=\"/\">\n          &times;\n        </button>\n      </div>\n      <!-- Modal body -->\n      <div class=\"modal-body\" *ngIf=\"modalBody\" [innerHTML]=\"modalBody\"></div>\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" (click)=\"onCloseHandled()\" class=\"btn btn-danger\" data-dismiss=\"modal\" routerLink=\"/\">\n          Close\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/main/notification-panel/notification-panel.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/main/notification-panel/notification-panel.component.ts ***!
  \************************************************************************************/
/*! exports provided: NotificationPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPanelComponent", function() { return NotificationPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");


// Services

var NotificationPanelComponent = /** @class */ (function () {
    function NotificationPanelComponent(authService) {
        this.authService = authService;
        this.total = 0;
        // modal & loading
        this.isLoading = true;
        this.display = "none";
        this.modalHeader = "";
        this.modalBody = "";
    }
    NotificationPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        // import user data
        this.authService
            .getCurrentUser()
            .subscribe(function (res) { return (_this.authService.userDetails(res.user), _this.authService.userOrdersDetails(res.orders[0])); });
        this.authService.currentUserData.subscribe(function (user) { return (_this.user = user); });
        this.authService.currentUserOrdersData.subscribe(function (orders) { return (_this.orders = orders); });
        this.isLoading = false;
    };
    NotificationPanelComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        this.total = 0;
        this.user.cart.items.forEach(function (item) { return (_this.total += item.prod_total); });
    };
    // modal
    NotificationPanelComponent.prototype.openModal = function () {
        this.display = "block";
    };
    NotificationPanelComponent.prototype.onCloseHandled = function () {
        this.display = "none";
    };
    NotificationPanelComponent.prototype.onError = function () {
        this.isLoading = false;
        this.modalHeader = "An Error Has Occurred";
        this.modalBody =
            "Could not show user purchases & cart info do to server communication problem. Please try again later.";
        this.openModal();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NotificationPanelComponent.prototype, "user", void 0);
    NotificationPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-notification-panel",
            template: __webpack_require__(/*! ./notification-panel.component.html */ "./src/app/components/main/notification-panel/notification-panel.component.html"),
            styles: [__webpack_require__(/*! ./notification-panel.component.css */ "./src/app/components/main/notification-panel/notification-panel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NotificationPanelComponent);
    return NotificationPanelComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\r\n    background-color: blue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark bg-danger\">\n  <div class=\"container-fluid\">\n    <!-- spinner -->\n    <div *ngIf=\"isLoading\" class=\"spinner-border text-light\" role=\"status\">\n      <span class=\"sr-only\">Loading...</span>\n    </div>\n    <!-- Navbar title -->\n    <a class=\"navbar-brand\" routerLink=\"\" routerLinkActive=\"active\">\n      <fa name=\"\" class=\"pr-2\"></fa>online medical store</a\n    >\n    <!-- Navbar collapse button -->\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#mobile-nav\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <!-- links -->\n    <div class=\"collapse navbar-collapse\" id=\"mobile-nav\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/dashboard\" routerLinkActive=\"active\">Shop Now!</a>\n        </li>\n      </ul>\n      <!-- shop info -->\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link disabled\" href=\"#\" routerLinkActive=\"active\"\n            ><span class=\"badge badge-dark mr-1\"> <fa name=\"phone\" class=\"pr-2\"></fa>95383511</span></a\n          >\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"mailto:ng-market@mail.com\" routerLinkActive=\"active\"\n            ><span class=\"badge badge-dark\"> <fa name=\"envelope\" class=\"pr-2\"></fa>medical@mail.com</span></a\n          >\n        </li>\n        <!-- Login/ Register/ Logout -->\n        <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\n        </li>\n        <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/register\" routerLinkActive=\"active\">Register</a>\n        </li>\n        <li *ngIf=\"authService.loggedIn()\" (click)=\"logout()\" class=\"nav-item\" style=\"cursor:pointer\">\n          <a class=\"nav-link\">Logout</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isLoading = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.isLoading = false;
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logoutUser();
        this.authService.userDetails(null);
        this.router.navigate["/"];
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-navbar",
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center p-5\">\n  <!-- spinner -->\n  <div *ngIf=\"isLoading\" class=\"spinner-border text-danger\" role=\"status\"><span class=\"sr-only\">Loading...</span></div>\n  <h1>404</h1>\n  <img src=\"./assets/images/frown-solid.svg\" class=\"img-fluid\" style=\"width:100px;\" alt=\"404\" />\n  <p class=\"mt-3\">It apears the page you are looking for does not exist</p>\n  <p class=\"mt-2\">\n    Click here to\n    <a class=\"navbar-brand\" routerLink=\"\" routerLinkActive=\"active\"> redirect<fa name=\"undo\" class=\"ml-2\"></fa></a>\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
        this.isLoading = true;
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
        this.isLoading = false;
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-page-not-found",
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/components/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this._authService.loggedIn()) {
            return true;
        }
        else {
            this._router.navigate(["/"]);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, filterString, propName) {
        if (value.length === 0 || filterString === "")
            return value;
        var resultArray = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var item = value_1[_i];
            if (item[propName].toLowerCase().includes(filterString.toLowerCase()))
                resultArray.push(item);
        }
        return resultArray;
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: "filter" })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/pipes/highlight.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/highlight.pipe.ts ***!
  \*****************************************/
/*! exports provided: HighlightPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightPipe", function() { return HighlightPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var HighlightPipe = /** @class */ (function () {
    function HighlightPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    HighlightPipe.prototype.transform = function (text, search) {
        if (search && text) {
            var pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            pattern = pattern
                .split(" ")
                .filter(function (t) {
                return t.length > 0;
            })
                .join("|");
            var regex = new RegExp(pattern, "gi");
            return this.sanitizer.bypassSecurityTrustHtml(text.replace(regex, function (match) { return "<span style='background-color:yellow'>" + match + "</span>"; }));
        }
        else
            return text;
    };
    HighlightPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: "highlight" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], HighlightPipe);
    return HighlightPipe;
}());



/***/ }),

/***/ "./src/app/pipes/shorten.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/shorten.pipe.ts ***!
  \***************************************/
/*! exports provided: ShortenPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortenPipe", function() { return ShortenPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShortenPipe = /** @class */ (function () {
    function ShortenPipe() {
    }
    ShortenPipe.prototype.transform = function (value, limit) {
        if (value)
            if (value.length > limit)
                return value.substr(0, limit) + "... ." + value.split(".").pop();
        return value;
    };
    ShortenPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: "shorten" })
    ], ShortenPipe);
    return ShortenPipe;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.url = "http://localhost:5000/user/";
        this.authStatus = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.currentAuthStatus = this.authStatus.asObservable();
        this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.currentUserData = this.userData.asObservable();
        this.userOrdersData = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.currentUserOrdersData = this.userOrdersData.asObservable();
    }
    AuthService.prototype.changeAuthStatus = function (auth) {
        this.authStatus.next(auth);
    };
    AuthService.prototype.userDetails = function (user) {
        this.userData.next(user);
    };
    AuthService.prototype.userOrdersDetails = function (orders) {
        this.userOrdersData.next(orders);
    };
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.url + "register", user);
    };
    AuthService.prototype.loginUser = function (user) {
        return this.http.post(this.url + "login", user);
    };
    AuthService.prototype.logoutUser = function () {
        localStorage.clear();
        this.router.navigate(["/"]);
    };
    AuthService.prototype.loggedIn = function () {
        return !!localStorage.getItem("token");
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem("token");
    };
    AuthService.prototype.getCurrentUser = function () {
        return this.http.get("http://localhost:5000/shop/current");
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/order.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var OrderService = /** @class */ (function () {
    function OrderService(http, router) {
        this.http = http;
        this.router = router;
        this.url = "http://localhost:5000/shop";
        this.userOrder = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.currentUserOrder = this.userOrder.asObservable();
        this.orderStatus = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.currentOrderStatus = this.orderStatus.asObservable();
    }
    OrderService.prototype.changeOrderStatus = function (status) {
        this.orderStatus.next(status);
    };
    OrderService.prototype.ordersDetails = function (orders) {
        this.userOrder.next(orders);
    };
    OrderService.prototype.getAllOrders = function () {
        return this.http.get(this.url + "/orders");
    };
    OrderService.prototype.addProductToCart = function (user, product) {
        return this.http.put(this.url + ("/cart/" + user._id + "/" + product.id), { quantity: product.quantity });
    };
    OrderService.prototype.removeProductFromCart = function (user, product) {
        return this.http.put(this.url + ("/cart/delete/" + user._id + "/" + product.productId), user._id);
    };
    OrderService.prototype.emptyCart = function (user) {
        return this.http.put(this.url + ("/empty-cart/" + user._id), user._id);
    };
    OrderService.prototype.revokeOrder = function (user) {
        return this.http.put(this.url + ("/open-cart/" + user._id), user._id);
    };
    OrderService.prototype.initializeOrder = function (user) {
        return this.http.put(this.url + ("/orders/" + user._id), user._id);
    };
    OrderService.prototype.addOrder = function (user, order) {
        return this.http.post(this.url + ("/orders/" + user._id), order);
    };
    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ProductService = /** @class */ (function () {
    function ProductService(http, router) {
        this.http = http;
        this.router = router;
        this.url = "http://localhost:5000/shop";
        this.products = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.currentProducts = this.products.asObservable();
        this.product = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.currentProduct = this.product.asObservable();
        this.categories = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.currentCategories = this.categories.asObservable();
    }
    ProductService.prototype.getShopInventory = function () {
        return this.http.get(this.url + "/info");
    };
    ProductService.prototype.displayedCategories = function (categories) {
        this.categories.next(categories);
    };
    ProductService.prototype.displayedProducts = function (products) {
        this.products.next(products);
    };
    ProductService.prototype.chosenProduct = function (product) {
        this.product.next(product);
    };
    ProductService.prototype.getAllProducts = function () {
        return this.http.get(this.url + "/products");
    };
    ProductService.prototype.getAllCategories = function () {
        return this.http.get(this.url + "/category");
    };
    ProductService.prototype.getProductsByCategory = function (categoryName) {
        return this.http.get(this.url + "/category/" + categoryName);
    };
    ProductService.prototype.getProductsByName = function (productName) {
        return this.http.get(this.url + "/search/" + productName);
    };
    ProductService.prototype.createProduct = function (newProduct) {
        return this.http.post(this.url, newProduct);
    };
    ProductService.prototype.editProduct = function (productId, updatedProduct) {
        return this.http.put(this.url + "/" + productId, updatedProduct);
    };
    ProductService.prototype.deleteProduct = function (productId) {
        return this.http.delete(this.url + "/" + productId);
    };
    ProductService.prototype.createCategory = function (category) {
        return this.http.post(this.url + "/category", category);
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/token-interceptor.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/token-interceptor.service.ts ***!
  \*******************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");


// Services

var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(injector) {
        this.injector = injector;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]);
        var tokenizedReq = req.clone({
            headers: req.headers.set("Authorization", "Bearer " + authService.getToken())
        });
        return next.handle(tokenizedReq);
    };
    TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\gprajwal\Downloads\online medical store\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map